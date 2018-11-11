---
date: 2018-11-07T00:11:02+01:00
title: Defining a schema
weight: 20
menu:
  main:
    identifier: tools-schema-definition
    parent: Tools
    url: /tools/schema-definition/
---

A [GraphQL schema](http://graphql.org/learn/schema/) can be given either as raw strings:

```java
// My application class
SchemaParser.newParser()
    .schemaString("Query { }")
```

or as files on the classpath:

```java
// My application class
SchemaParser.newParser()
    .file("my-schema.graphqls")

// my-schema.graphqls
Query { }
```
Multiple sources will be concatenated together in the order given, allowing you to modularize your schema if desired.

## Resolvers and Data Classes

GraphQL Java Tools maps fields on your GraphQL objects to methods and properties on your java objects.
For most scalar fields, a POJO with fields and/or getter methods is enough to describe the data to GraphQL.
More complex fields (like looking up another object) often need more complex methods with state not provided by the GraphQL context (repositories, connections, etc).
GraphQL Java Tools uses the concept of "Data Classes" and "Resolvers" to account for both of these situations.

Given the following GraphQL schema
```graphql
type Query {
    books: [Book!]
}

type Book {
    id: Int!
    name: String!
    author: Author!
}

type Author {
    id: Int!
    name: String!
}
```

GraphQL Java Tools will expect to be given three classes that map to the GraphQL types: `Query`, `Book`, and `Author`.
The Data classes for Book and Author are simple:

```java
class Book {
    private int id;
    private String name;
    private int authorId;

    // constructor

    // getId
    // getName
    // getAuthorId
}

class Author {
    private int id;
    private String name;

    // constructor

    // getId
    // getName
}
```

But what about the complex fields on `Query` and `Book`?
These are handled by "Resolvers".  Resolvers are object instances that reference the "Data Class" they resolve fields for.

The BookResolver might look something like this:
```java
class BookResolver implements GraphQLResolver<Book> /* This class is a resolver for the Book "Data Class" */ {

    private AuthorRepository authorRepository;

    public BookResolver(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author author(Book book) {
        return authorRepository.findById(book.getAuthorId());
    }
}
```

When given a BookResolver instance, GraphQL Java Tools first attempts to map fields to methods on the resolver before mapping them to fields or methods on the data class.
If there is a matching method on the resolver, the data class instance is passed as the first argument to the resolver function.  This does not apply to root resolvers, since those don't have a data class to resolve for.
An optional argument can be defined to inject the `DataFetchingEnvironment`, and must be the last argument.

### Root Resolvers

Since the Query/Mutation/Subscription objects are root GraphQL objects, they doesn't have an associated data class.  In those cases, any resolvers implementing `GraphQLQueryResolver`, `GraphQLMutationResolver`, or `GraphQLSubscriptionResolver` will be searched for methods that map to fields in their respective root types.  Root resolver methods can be spread between multiple resolvers, but a simple example is below:
```java
class Query implements GraphQLQueryResolver {

    private BookRepository bookRepository;

    public Query(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> books() {
        return bookRepository.findAll();
    }
}
```

Resolvers must be provided to the schema parser:
```java
SchemaParser.newParser()
    // ...
    .resolvers(new Query(bookRepository), new BookResolver(authorRepository))
```

### Field Mapping Priority

The field mapping is done by name against public/protected methods and public/protected/private fields, with the following priority:

First on the resolver or root resolver (note that dataClassInstance doesn't apply for root resolvers):

1. `method <name>(dataClassInstance, *fieldArgs [, DataFetchingEnvironment])`
2. `method is<Name>(dataClassInstance, *fieldArgs [, DataFetchingEnvironment])`, only if the field returns a `Boolean`
3. `method get<Name>(dataClassInstance, *fieldArgs [, DataFetchingEnvironment])`
4. `method getField<Name>(dataClassInstance, *fieldArgs [, DataFetchingEnvironment])`

Then on the data class:

1. `method <name>(*fieldArgs [, DataFetchingEnvironment])`
2. `method is<Name>(*fieldArgs [, DataFetchingEnvironment])`, only if the field returns a `Boolean`
3. `method get<Name>(*fieldArgs [, DataFetchingEnvironment])`
4. `method getField<Name>(*fieldArgs [, DataFetchingEnvironment])`
5. `field <name>`

Last of all, if the data class implements`java.util.Map` then:
1. `method get(name)`


*Note:* All reflection discovery is done on startup, and runtime reflection method calls use [reflectasm](https://github.com/EsotericSoftware/reflectasm), which increases performance and unifies stacktraces.  No more `InvocationTargetException`!

*Note:* `java.util.Optional` can be used for nullable field arguments and nullable return values, and the schema parser will verify that it's not used with non-null field arguments and return values.

*Note:* Methods on `java.lang.Object` are excluded from method matching, for example a field named `class` will require a method named `getFieldClass` defined.

*Note:* If one of the values of a type backed by a `java.util.Map` is non-scalar then this type will need to be added to the `type dictionary` (see below). After adding this type to the dictionary, GraphQL Java Tools will however still be able to find the types used in the fields of this added type.

## Enum Types

Enum values are automatically mapped by `Enum#name()`.

## Input Objects

GraphQL input objects don't need to be provided when parsing the schema - they're inferred from the resolver or data class method at run-time.
If graphql-java passes a `Map<?, ?>` as an argument, GraphQL Java Tools attempts to marshall the data into the class expected by the method in that argument location.

This resolver method's first argument will be marshalled automatically:
```java
class Query extends GraphQLRootResolver {
    public int add(AdditionInput input) {
        return input.getFirst() + input.getSecond();
    }
}

class AdditionInput {
    private int first;
    private int second;

    // getFirst()
    // getSecond()
}
```

## Interfaces and Union Types

GraphQL interface/union types are automatically resolved from the schema and the list of provided classes, and require no extra work outside of the schema.
Although not necessary, it's generally a good idea to have java interfaces that correspond to your GraphQL interfaces to keep your code understandable.

## Scalar Types

It's possible to create custom scalar types in GraphQL-Java by creating a new instance of the `GraphQLScalarType` class.  To use a custom scalar with GraphQL Java Tools, add the scalar to your GraphQL schema:
```graphql
scalar UUID
```

Then pass the scalar instance to the parser:
```java
SchemaParser.newParser()
    // ...
    .scalars(myUuidScalar)
```

## Type Dictionary

Sometimes GraphQL Java Tools can't find classes when it scans your objects, usually because of limitations with interface and union types.  Sometimes your Java classes don't line up perfectly with your GraphQL schema, either. GraphQL Java Tools allows you to provide additional classes manually and "rename" them if desired:
```java
SchemaParser.newParser()
    // ...
    .dictionary(Author.class)
    .dictionary("Book", BookClassWithIncorrectName.class)
```

## Making the graphql-java Schema Instance

After you've passed all relavant schema files/class to the parser, call `.build()` and `.makeExecutableSchema()` to get a graphql-java `GraphQLSchema`:

```java
SchemaParser.newParser()
    // ...
    .build()
    .makeExecutableSchema()
```

If you want to build the `GraphQLSchema` yourself, you can get all of the parsed objects with `parseSchemaObjects()`:

```java
SchemaParser.newParser()
    // ...
    .build()
    .parseSchemaObjects()
```

## GraphQL Descriptions

GraphQL object/field/argument descriptions can be provided by comments in the schema:

```graphql
# One of the films in the Star Wars Trilogy
enum Episode {
    # Released in 1977
    NEWHOPE
    # Released in 1980
    EMPIRE
    # Released in 1983
    JEDI
}
```
## GraphQL Deprecations

GraphQL field/enum deprecations can be provided by the `@deprecated(reason: String)` directive, and are added to the generated schema.
You can either supply a **reason** argument with a string value or not supply one and receive a "No longer supported" message when introspected:

```graphql
# One of the films in the Star Wars Trilogy
enum Episode {
    # Released in 1977
    NEWHOPE,
    # Released in 1980
    EMPIRE,
    # Released in 1983
    JEDI,
    # Released in 1999
    PHANTOM @deprecated(reason: "Not worth referencing"),
    # Released in 2002
    CLONES @deprecated
}
```
