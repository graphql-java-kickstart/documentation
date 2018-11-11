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

* `genericWrappers`: Allows defining your own generic classes that should be unwrapped when matching Java types to GraphQL types.  You must supply the class and the index (zero-indexed) of the wrapped generic type.  For example: If you want to unwrap type argument `T` of `Future<T>`, you must pass `Future.class` and `0`.

* `useDefaultGenericWrappers`: Defaults to `true`.  Tells the parser whether or not to add it's own list of well-known generic wrappers, such as `Future` and `CompletableFuture`.
* `allowUnimplementedResolvers`: Defaults to `false`.  Allows a schema to be created even if not all GraphQL fields have resolvers.  Intended only for development, it will log a warning to remind you to turn it off for production.  Any unimplemented resolvers will throw errors when queried.
* `objectMapperConfigurer`: Exposes the Jackson `ObjectMapper` that handles marshalling arguments in method resolvers.  Every method resolver gets its own mapper, and the configurer can configure it differently based on the GraphQL field definition.
* `preferGraphQLResolver`: In cases where you have a Resolver class and legacy class that conflict on type arguements, use the Resolver class instead of throwing an error.
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
