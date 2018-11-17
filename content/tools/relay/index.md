---
date: 2018-11-07T00:11:02+01:00
title: Relay
weight: 40
tags: ["relay", "factory", "connection", "edge", "pageinfo"]
menu:
  main:
    parent: Tools
    url: /tools/relay/
---

Relay requires quite some boilerplate type definitions to be defined. They
are all the same apart from type of the node the Relay connection targets.
This results in schemas with a lot of duplication, like the following:
```graphql
type Query {
    users(first: Int, after: String): UserConnection
    organizations(first: Int, after: String): OrganizationConnection
}

type UserConnection {
    edges: [UserEdge]
    pageInfo: PageInfo
}

type UserEdge {
    cursor: String
    node: User
}

type PageInfo {
  hasPreviousPage: Boolean!
  hasNextPage: Boolean!
}

type User {
    id: ID!
    name: String
}

type OrganizationConnection {
    edges: [OrganizationEdge]
    pageInfo: PageInfo
}

type OrganizationEdge {
    cursor: String
    node: Organization
}

type Organization {
    id: ID!
}
```

# Using the Type Definition Factory
In version 5.4 of `graphql-java-tools` the **Type Definition Factory** has been
introduced. This has been added with this particular use case in mind, but can
be used for any type of definition that you'd want to add dynamically instead
of defining it statically in the SDL.

To support Relay we have created the `RelayConnectionFactory` that is enabled
by default. It scans the SDL for any fields annotated with the custom directive
`@connection`. For each it will dynamically add the required type definitions
to the schema. It also requires the `PageInfo` type definition.

By using this feature the schema definition shown above can be reduced to:
```graphql
type Query {
    users(first: Int, after: String): UserConnection @connection(for: "User")
    organizations(first: Int, after: String): OrganizationConnection @connection(for: "Organization")
}

type User {
    id: ID!
    name: String
}

type Organization {
    id: ID!
}
```
The connection type will be created if absent using the type name specified
for the field, e.g. `UserConnection` and `OrganizationConnection` in the example
above. The edge type will get the same name appended with `Edge`, e.g.
`UserConnectionEdge` and `OrganizationConnectionEdge` for this example.
