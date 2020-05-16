---
date: 2018-11-07T00:11:02+01:00
title: Dataloaders
weight: 20
menu:
  main:
    parent: Servlet
    url: /servlet/dataloaders/
---

It is possible to create context, and consequently dataloaders, in both a request scope and a per query scope by 
customizing [GraphQLContextBuilder](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-kickstart/src/main/java/graphql/kickstart/execution/context/GraphQLContextBuilder.java) 
and selecting the appropriate [ContextSetting](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-kickstart/src/main/java/graphql/kickstart/execution/context/ContextSetting.java) 
with the provided [GraphQLConfiguration](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/GraphQLConfiguration.java).
A new [DataLoaderRegistry](https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoaderRegistry.java) should be created in each call to the GraphQLContextBuilder, and the servlet will call the builder at the appropriate times.
For example:
```java
public class CustomGraphQLContextBuilder implements GraphQLServletContextBuilder {

  private final DataLoader userDataLoader;
    
  public CustomGraphQLContextBuilder(DataLoader userDataLoader) {
    this.userDataLoader = userDataLoader;
  }
    
  public GraphQLContext build() {
    return new DefaultGraphQLContext();
  }
    
  public GraphQLContext build(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
    return DefaultGraphQLServletContext.createServletContext()
            .with(httpServletRequest)
            .with(httpServletResponse)
            .with(buildDataLoaderRegistry())
            .build();
  }
    
  public GraphQLContext build(Session session, HandshakeRequest handshakeRequest) {
    return DefaultGraphQLWebSocketContext.createWebSocketContext()
            .with(session)
            .with(handshakeRequest)
            .with(buildDataLoaderRegistry())
            .build();
  }
    
  private DataLoaderRegistry buildDataLoaderRegistry() {
    DataLoaderRegistry registry = new DataLoaderRegistry();
    registry.register("userDataLoader", userDataLoader);
    return registry;
  }
}
```

It is then possible to access the [DataLoader](https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoader.java) 
in the resolvers by accessing the [DataLoaderRegistry](https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoaderRegistry.java) from context. For example:
 ```java
public CompletableFuture<String> getEmailAddress(User user, DataFetchingEnvironment dfe) { // User is the graphQL type
  final DataLoader<String, UserDetail> userDataloader =
    dfe.getContext().getDataLoaderRegistry().get().getDataLoader("userDataLoader"); // UserDetail is the data that is loaded

    return userDataloader.load(User.getName())
      .thenApply(userDetail -> userDetail != null ? userDetail.getEmailAddress() : null);
}
```
If per request is selected this will cause all queries within the http request, 
if using a batch, to share dataloader caches and batch together load calls as efficiently 
as possible. The dataloaders are dispatched using instrumentation and the correct instrumentation 
will be selected according to the `ContextSetting`. The default context setting in `GraphQLConfiguration` is per query.

Two additional context settings are provided, one for each of the previous settings but without the addition of the 
`Dataloader` dispatching instrumentation. This is useful for those not using Dataloaders or wanting to supply their 
own dispatching instrumentation though the instrumentation supplier within the `GraphQLQueryInvoker`.
