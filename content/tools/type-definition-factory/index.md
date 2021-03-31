---
date: 2018-11-07T00:11:02+01:00
title: Type Definition Factory
weight: 50
tags: ["type", "factory", "definition", "dynamic", "relay"]
menu:
  main:
    parent: Tools
    url: /tools/type-definition-factory/
---

The **Type Definition Factory** has been added to allow to dynamically
add type definitions to the schema instead of having to define them manually
in the SDL. There are a couple of use cases where the types that have to be defined
are very much alike and only certain parts are different. For example the
connection and edge types used by [Relay]({{< relref "/tools/relay/index.md" >}}). Since generics aren't supported in
the definition language this type definition factory has been added.

## Basic usage
Immediately after the SDL has been parsed the schema parser checks if any
`TypeDefinitionFactory` instances have been defined in `SchemaParserOptions`.
By default the [RelayConnectionFactory]({{< relref "/tools/relay/index.md" >}})
is available.

You can add your own type definition factories by implementing the `TypeDefinitionFactory`.
It contains just one method. All definitions that have been found after parsing
the SDL and any preceding type definition factories are passed in. This allows you
to perform some logic based on the current schema to determine which type definitions
to create. You must only return the new type definition you want to add to the schema.
The existing definitions that were passed in should not be included in the returned list.
```java
class MyTypeDefinitionFactory implements TypeDefinitionFactory {
  public List<Definition<?>> create(final List<Definition<?>> existing) {
    return ObjectTypeDefinition.newObjectTypeDefinition()
              .name("MyType")
              .fieldDefinition(new fieldDefinition("myField", new TypeName("String")))
              .build();
  }
}
```

Make sure to let `graphql-java-tools` know you want to use your custom
type definition factory by adding it to your `SchemaParserOptions`, e.g.:
```java
SchemaParserOptions options = SchemaParserOptions.newOptions()
        .TypeDefinitionFactory(new MyTypeDefinitionFactory())
        .build();
GraphQLSchema schema = SchemaParser.newParser().file("schema.graphqls")
        .resolvers(new QueryResolver())
        .options(options)
        .build()
        .makeExecutableSchema();
```
