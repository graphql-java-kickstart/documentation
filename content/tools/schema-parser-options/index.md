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

* `contextClass`: If you use a context object to execute your queries, let the parser know about it so that it can add it to data fetchers as an argument.
* `genericWrappers`: Allows defining your own generic classes that should be unwrapped when matching Java types to GraphQL types.  You must supply the class and the index (zero-indexed) of the wrapped generic type.  For example: If you want to unwrap type argument `T` of `Future<T>`, you must pass `Future.class` and `0`.

* `useDefaultGenericWrappers`: Defaults to `true`.  Tells the parser whether or not to add it's own list of well-known generic wrappers, such as `Future` and `CompletableFuture`.
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
    You will now have the code find two different return types for getBars() and application will not start with the error ```Caused by: com.coxautodev.graphql.tools.SchemaClassScannerError: Two different classes used for type```
    If this property is true it will ignore the legacy version.
* `addProxyHandler`: If your runtime resolver classes are auto-generated proxies of some kind you can provide a handler to help the parser find the real resolvers behind them. Four proxy handlers are provided by default for these libraries:
    * Javassist
    * Guice
    * Spring AOP
    * Weld
* `introspectionEnabled`: Defaults to `true`. When set to `false` this option will disable schema introspection via `NO_INTROSPECTION_FIELD_VISIBILITY`. See [Field Visibility](https://www.graphql-java.com/documentation/master/fieldvisibility/).
* `fieldVisibility`: Provide a graphql field visibility implementation. This option overrides `introspectionEnabled` when used. See [Field Visibility](https://www.graphql-java.com/documentation/master/fieldvisibility/).
* `coroutineContext` / `coroutineContextProvider`: Provide a kotlin coroutine context to be used with suspend functions of resolvers.
* `typeDefinitionFactory`: See [Type Definition Factory]({{< relref "/tools/type-definition-factory/index.md" >}}).
* `includeUnusedTypes`: Defaults to `false`. By default, the parser will ignore unused type definitions in the schema. Enable this option to include them regardless.
