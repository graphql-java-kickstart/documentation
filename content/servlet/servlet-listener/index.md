---
date: 2020-05-15T09:28:02+01:00
title: Servlet Listener
weight: 30
menu:
  main:
    parent: Servlet
    url: /servlet/servlet-listener/
---

The GraphQL Servlet library allows you to add a [Servlet Listener](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/core/GraphQLServletListener.java) 
for listening to the GraphQL request. It provides hooks into the servlet request execution (success, error, and finally):

```java
public class MyServlet extends GraphQLHttpServlet {

  @Override
  protected GraphQLConfiguration getConfiguration() {
    return GraphQLConfiguration.with(createSchema())
      .with(queryInvoker)
      .with(Arrays.asList(listener))
      .build();
  }
}
```

## Instrumentation

The Servlet Listener listens to the servlet request, but not to the GraphQL query execution.
If you want to listen to that you should use the [Instrumentation](https://www.graphql-java.com/documentation/v16/instrumentation/)
provided by GraphQL Java. You can extend [SimpleInstrumentation](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/instrumentation/SimpleInstrumentation.java)
to quickly create a custom implementation and use it when creating the `GraphQLConfiguration`.

See the [GraphQL Java documentation](https://www.graphql-java.com/documentation/v16/instrumentation/)
for details on creating custom instrumentations.

```java
public class MyServlet extends GraphQLHttpServlet {

  @Override
  protected GraphQLConfiguration getConfiguration() {
    GraphQLQueryInvoker queryInvoker = GraphQLQueryInvoker.newBuilder()
      .withExecutionStrategyProvider(executionStrategyProvider)
      .with(Arrays.asList(instrumentation))
      .build();
    return GraphQLConfiguration.with(createSchema())
      .with(queryInvoker)
      .build();
  }
}
```
