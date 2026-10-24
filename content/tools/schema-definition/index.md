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
Line numbers in syntax errors count from the start of each file or string, and errors in a file end with its name. To name a schema string too, pass the name as well:

```java
SchemaParser.newParser()
    .schemaString(usersSchema, "users.graphqls")
```

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
The Data classes for `Book` and `Author` are simple:

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

What about the complex fields on `Query` and `Book`?
These are handled by "Resolvers".  Resolvers are object instances that reference the "Data Class" they resolve fields for.

The `BookResolver` might look something like this:
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

When given a `BookResolver` instance, GraphQL Java Tools first attempts to map fields to methods on the resolver before mapping them to fields or methods on the data class.
If there is a matching method on the resolver, the data class instance is passed as the first argument to the resolver function.  This does not apply to root resolvers, since those don't have a data class to resolve for.
The field's arguments come next, in order.
After them, a method can take any of `DataFetchingEnvironment`, `GraphQLContext` and the `contextClass` set in the [schema parser options]({{< relref "/tools/schema-parser-options/index.md" >}}), in any order. A method that takes one of these in an argument's place fails the build.

A resolver also applies to subclasses and implementations of its data class, so a `GraphQLResolver<Base>` resolves fields for a data class `Thing extends Base`.
A resolver for a generic class, like `GraphQLResolver<Page<?>>`, applies to every `Page<T>`.
When several resolvers apply, the one for the most specific type is tried first.

In Kotlin, a resolver method can also be an extension function on the data class:
```kotlin
class BookResolver(private val authorRepository: AuthorRepository) : GraphQLResolver<Book> {
    fun Book.author(): Author = authorRepository.findById(authorId)
}
```

### Root Resolvers

Since the Query/Mutation/Subscription objects are root GraphQL objects, they don't have an associated data class.  In those cases, any resolvers implementing `GraphQLQueryResolver`, `GraphQLMutationResolver`, or `GraphQLSubscriptionResolver` will be searched for methods that map to fields in their respective root types.  Root resolver methods can be spread between multiple resolvers, but a simple example is below:
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

`*environmentOrContext` stands for any of `DataFetchingEnvironment`, `GraphQLContext` and the `contextClass`, in any order.

First on the resolver or root resolver (note that dataClassInstance doesn't apply for root resolvers):

1. `method <name>(dataClassInstance, *fieldArgs [, *environmentOrContext])`
2. `method is<Name>(dataClassInstance, *fieldArgs [, *environmentOrContext])`, only if the field returns a `Boolean`
3. `method get<Name>(dataClassInstance, *fieldArgs [, *environmentOrContext])`
4. `method getField<Name>(dataClassInstance, *fieldArgs [, *environmentOrContext])`

Then on the data class:

1. `method <name>(*fieldArgs [, *environmentOrContext])`
2. `method is<Name>(*fieldArgs [, *environmentOrContext])`, only if the field returns a `Boolean`
3. `method get<Name>(*fieldArgs [, *environmentOrContext])`
4. `method getField<Name>(*fieldArgs [, *environmentOrContext])`
5. `field <name>`

Last of all, if the data class implements`java.util.Map` then:
1. `method get(name)`

If nothing above matches, a resolver method can leave out the data class instance, as long as it ends in at least one environment or context parameter:

1. `method <name>(*fieldArgs, *environmentOrContext)`, and the `is`, `get` and `getField` forms in the same order as above

This is for fields that only need the environment, e.g. a value the parent field put in its `localContext`. It doesn't apply when `allowUnimplementedResolvers` or a missing resolver data fetcher is set, since those already handle a field with no match.


<!--*Note:* `java.util.Optional` can be used for nullable field arguments and nullable return values, and the schema parser will verify that it's not used with non-null field arguments and return values.-->

*Note:* Methods on `java.lang.Object` are excluded from method matching, for example a field named `class` will require a method named `getFieldClass` defined.

*Note:* If one of the values of a type backed by a `java.util.Map` is non-scalar, on its own or in a list, then this type will need to be added to the `type dictionary` (see below). After adding this type to the dictionary, GraphQL Java Tools will however still be able to find the types used in the fields of this added type.

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
Members and implementors that no resolver returns need to be in the [type dictionary](#type-dictionary), unless the class of their union or interface is sealed.
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

Several input types can share a class, e.g. Jackson's `ObjectNode`. Other types need a class each.

If the class of a union or interface is a Kotlin sealed class or interface, or a Java sealed type, its members and implementors don't need to be added. GraphQL Java Tools uses the subclass with the same simple name as the GraphQL type:
```kotlin
// union Pet = NormalPet | WeirdPet
sealed class Pet {
    data class NormalPet(val name: String) : Pet()
    data class WeirdPet(val classification: String) : Pet()
}
```

## Making the graphql-java Schema Instance

After you've passed all relevant schema files/class to the parser, call `.build()` and `.makeExecutableSchema()` to get a graphql-java `GraphQLSchema`:

```java
SchemaParser.newParser()
    // ...
    .build()
    .makeExecutableSchema()
```

If you want to build the `GraphQLSchema` yourself, you can get all the parsed objects with `parseSchemaObjects()`:

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

GraphQL deprecations on output fields, enums, arguments, directive arguments, and input fields can be provided by the `@deprecated(reason: String)` directive, and are added to the generated schema.
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
