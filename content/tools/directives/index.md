---
date: 2018-11-07T00:11:02+01:00
title: Directives
weight: 60
tags: ["directives"]
menu:
  main:
    parent: Tools
    url: /tools/directives/
---

See [Schema Directives](https://www.graphql-java.com/documentation/v16/sdl-directives/)
for a detailed explanation about directives including examples on how to define
them in the SDL and to create the required classes.

To add your custom `SchemaDirectiveWiring` to `graphql-java-tools` pass it along
when creating the `SchemaParser` using

```
SchemaParser.newParser().directive("name", new MySchemaDirectiveWiring()).build()
```

## Basic usage
Let's say you defined a custom directive to make text uppercase in a resource `schema.graphqls`:
```
directive @uppercase on FIELD_DEFINITION

type Query {
  hello: String @uppercase
}
```

And the actual implementation is the following:
```
public class UppercaseDirective implements SchemaDirectiveWiring {
  @Override
  public GraphQLFieldDefinition onField(SchemaDirectiveWiringEnvironment<GraphQLFieldDefinition> env) {
    GraphQLFieldDefinition field = env.getElement();
    GraphQLFieldsContainer parentType = env.getFieldsContainer();

    // build a data fetcher that transforms the given value to uppercase
    DataFetcher originalFetcher = env.getCodeRegistry().getDataFetcher(parentType, field);
    DataFetcher dataFetcher =
        DataFetcherFactories.wrapDataFetcher(
            originalFetcher,
            ((dataFetchingEnvironment, value) -> {
              if (value instanceof String) {
                return ((String) value).toUpperCase();
              }
              return value;
            }));

    // now change the field definition to use the new uppercase data fetcher
    env.getCodeRegistry().dataFetcher(parentType, field, dataFetcher);
    return field;
  }
}
```

Add our custom directive when creating the schema parser:
```java
SchemaParser.newParser()
  .file("schema.graphqls")
  .directive("uppercase", new UppercaseDirective())
  // ...
  .build()
  .makeExecutableSchema();
```

## Supported locations
Support for directives is currently limited to the following locations:

* `OBJECT`
* `FIELD_DEFINITION`
* `ARGUMENT_DEFINITION`
* `INTERFACE`
* `UNION`
* `ENUM`
* `ENUM_VALUE`
* `INPUT_OBJECT`
* `INPUT_FIELD_DEFINITION`

Meaning directives for the following locations are currently not yet supported:

* `SCALAR`
