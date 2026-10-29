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

See [Schema Directives](https://www.graphql-java.com/documentation/directives)
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
```java
public class UppercaseDirective implements SchemaDirectiveWiring {
  @Override
  public GraphQLFieldDefinition onField(SchemaDirectiveWiringEnvironment<GraphQLFieldDefinition> env) {
    // build a data fetcher that transforms the given value to uppercase
    DataFetcher<?> dataFetcher =
        DataFetcherFactories.wrapDataFetcher(
            env.getFieldDataFetcher(),
            ((dataFetchingEnvironment, value) -> {
              if (value instanceof String) {
                return ((String) value).toUpperCase();
              }
              return value;
            }));

    // now change the field to use the new uppercase data fetcher
    return env.setFieldDataFetcher(dataFetcher);
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

If several wirings apply to the same element, each one gets the element returned by the previous one.

Arguments the SDL leaves out are filled in with their default from the directive definition, so the wiring sees the default instead of `null`.

An enum that's only used by directive definitions doesn't need a Java class. Its values are then passed to the wiring as `String`s. Add the enum to the [type dictionary]({{< relref "/tools/schema-definition/index.md#type-dictionary" >}}) to get the enum constants instead.

Wirings run once the whole schema is built, like in graphql-java, so the types they see are the real ones and not `GraphQLTypeReference`s.

## Supported locations
Wirings run for directives on the following locations:

* `SCALAR`
* `OBJECT`
* `FIELD_DEFINITION`
* `ARGUMENT_DEFINITION`
* `INTERFACE`
* `UNION`
* `ENUM`
* `ENUM_VALUE`
* `INPUT_OBJECT`
* `INPUT_FIELD_DEFINITION`

A directive applied where its definition doesn't allow it, without a required argument, or more than once without being `repeatable` fails the build with a `SchemaError` that lists each of them with its line.

Directives on `schema` and `extend schema` don't run a wiring, but they're added to the schema's applied directives. Like everywhere else, they have to be declared, unless `allowUndeclaredDirectives` is set in the [schema parser options]({{< relref "/tools/schema-parser-options/index.md" >}}).
