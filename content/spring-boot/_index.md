---
date: 2016-03-08T21:07:13+01:00
title: About GraphQL Spring Boot
weight: 1
menu:
  main:
    parent: Spring Boot
---

This library contains various Spring Boot starters to enable GraphQL related
services or features.

## Starters

* **graphql-spring-boot-starter**: turns your Spring Boot application into
a GraphQL Server using [GraphQL Servlet]({{< relref "/servlet/getting-started/index.md" >}})
and [GraphQL Java Tools]({{< relref "/tools/" >}})

* **graphql-kickstart-spring-boot-starter-graphql-annotations**: turns your Spring Boot application into 
a GraphQL Server using [GraphQL Servlet]({{< relref "/servlet/getting-started/index.md" >}})
and [GraphQL-Java Annotations](https://github.com/Enigmatis/graphql-java-annotations)

* **graphiql-spring-boot-starter**: embeds the **GraphiQL** tool for schema
introspection and query debugging (see [GraphiQL](https://github.com/graphql/graphiql))

* **graphql-spring-boot-starter-test**: adds testing capabilities to your project,
like the `@GraphQLTest` annotation which is comparable to `@SpringBootTest`

* **voyager-spring-boot-starter**: embed the **Voyager** tool to represent your
GraphQL API as an interactive graph (see [Voyager](https://github.com/APIs-guru/graphql-voyager))
