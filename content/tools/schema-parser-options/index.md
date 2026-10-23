---
date: 2018-11-07T00:11:02+01:00
title: Schema parser options
weight: 30
menu:
  main:
    identifier: tools-schema-parser-options
    parent: Tools
    url: /tools/schema-parser-options/
---

For advanced use-cases, the schema parser can be tweaked to suit your needs.
Use `SchemaParserOptions.newBuilder()` to build an options object to pass to the parser.

Options:

* `contextClass`: If you use a custom context object to execute your queries, let the parser know about it so that it can add it to data fetchers as an argument.  
  Make sure to also provide your context instance to the execution input:
    ```java
    var executionInput = ExecutionInput.newExecutionInput()
        .query(query)
        .variables(variables)
        .graphQLContext(Map.of(CustomContext.class, context));
    ```
* `genericWrappers`: Allows defining your own generic classes that should be unwrapped when matching Java types to GraphQL types.  You must supply the class and the index (zero-indexed) of the wrapped generic type.  For example: If you want to unwrap type argument `T` of `Future<T>`, you must pass `Future.class` and `0`.
  Use `GenericWrapper.withTransformer` to also convert the value at runtime. If the transformer returns `null`, the field is `null`.
  Wrappers and futures nested in lists or in other wrappers are unwrapped too, e.g. `List<Try<Payload>>` or `List<CompletableFuture<Item>>`. If one element fails, the whole field fails.
  A transformer or nested future that calls a DataLoader after an async step needs graphql-java's DataLoader chaining (`DataLoaderDispatchingContextKeys.setEnableDataLoaderChaining`), otherwise the field never completes.

* `useDefaultGenericWrappers`: Defaults to `true`.  Tells the parser whether or not to add it's own list of well-known generic wrappers, such as `Future` and `CompletableFuture`.
  graphql-java only waits on a `CompletionStage`, so a method declared to return a `Future` has to return one, such as a `CompletableFuture`. Any other future fails the field with an error, unless a generic wrapper transformer converts it.
* `allowUnimplementedResolvers`: Defaults to `false`.  Allows a schema to be created even if not all GraphQL fields have resolvers.  Intended only for development, it will log a warning to remind you to turn it off for production.  Any unimplemented resolvers will throw errors when queried.
* `missingResolverDataFetcher`: Allows you to provide custom behavior for missing GraphQL fields.
* `inputArgumentOptionalDetectOmission`: Defaults to `false`. By default, the parser will treat omitted or null method input arguments as `Optional.empty` in resolvers. If you prefer, you can disable this behavior.
* `objectMapperConfigurer` / `objectMapperProvider`: Exposes the Jackson `ObjectMapper` that handles marshalling arguments in method resolvers.  Every method resolver gets its own mapper, and the configurer can configure it differently based on the GraphQL field definition.
* `preferGraphQLResolver`: In cases where you have a Resolver class and legacy class that conflict on type arguments, use the Resolver class instead of throwing an error.
  Specifically this situation can occur when you have a graphql schema type `Foo` with a `bars` property and classes:
    ```java
    // legacy class you can't change
    class Foo {
      Set<Bar> getBars() {
        //...returns set of bars...
      }
    }

    // nice resolver that does what you want
    class FooResolver implements GraphQLResolver<Foo> {
      Set<BarDTO> getBars() {
        // ...converts Bar objects to BarDTO objects and returns set...
      }
    }
    ```
    You will now have the code find two different return types for getBars() and application will not start with the error ```Caused by: graphql.kickstart.tools.SchemaClassScannerError: Two different classes used for type```
    If this property is true it will ignore the legacy version.
* `addProxyHandler`: If your runtime resolver classes are auto-generated proxies of some kind you can provide a handler to help the parser find the real resolvers behind them. Four proxy handlers are provided by default for these libraries:
    * Javassist
    * Guice
    * Spring AOP
    * Weld
* `introspectionEnabled`: Deprecated, and will be removed in 15.0.0. Defaults to `true`. When set to `false`, every field of the introspection types is hidden, so an introspection query fails validation.
  Turn introspection off with graphql-java instead, for the whole JVM or for one request:
    ```java
    Introspection.enabledJvmWide(false);

    var executionInput = ExecutionInput.newExecutionInput()
        .query(query)
        .graphQLContext(Map.of(Introspection.INTROSPECTION_DISABLED, true));
    ```
  An introspection query then fails with an "introspection disabled" error when it runs.
* `fieldVisibility`: Provide a graphql field visibility implementation. This option overrides `introspectionEnabled` when used. See [Field Visibility](https://www.graphql-java.com/documentation/field-visibility).
* `coroutineContext` / `coroutineContextProvider`: Provide a kotlin coroutine context to be used with suspend functions of resolvers.
  A suspend function runs on the calling thread until it first suspends, and continues on this context after that, so wrap blocking calls in `withContext(Dispatchers.IO)`.
  To run them in your own `CoroutineScope`, e.g. to cancel them with the request, put it in the execution input's context:
    ```java
    var executionInput = ExecutionInput.newExecutionInput()
        .query(query)
        .graphQLContext(Map.of(CoroutineScope.class, scope));
    ```
* `typeDefinitionFactory`: See [Type Definition Factory]({{< relref "/tools/type-definition-factory/index.md" >}}).
* `includeUnusedTypes`: Defaults to `false`. By default, the parser will ignore unused type definitions in the schema. Enable this option to include them regardless.
* `allowUndeclaredDirectives`: Defaults to `false`. Allows applying directives that aren't declared in the schema, e.g. the Apollo Federation directives imported through `@link`. They're only added as applied directives, with argument types guessed from their values. Directives with enum or input object arguments still have to be declared.
* `unmappedInputFields`: Defaults to `WARN`. What to do about input type fields that the class of a resolver argument has no property for. When a client sends such a field, Jackson fails to convert the argument, or drops the value if the `ObjectMapper` ignores unknown properties.
  The classes are checked when the schema is built, with each field's own `ObjectMapper`, and `WARN` logs a warning for each of these fields. `FAIL` fails the build instead, and `IGNORE` skips the check. To leave a field unmapped on purpose, add it to `@JsonIgnoreProperties` on the class.
  Classes with a custom deserializer, a builder or a delegating creator aren't checked, and neither are arguments bound to a `Map` or a `JsonNode`.
