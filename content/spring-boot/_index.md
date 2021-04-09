---
date: 2016-03-08T21:07:13+01:00
title: About GraphQL Spring Boot
weight: 1
menu:
  main:
    parent: Spring Boot
---

[![Maven Central](https://img.shields.io/maven-central/v/com.graphql-java-kickstart/graphql-spring-boot-starter.svg)](https://img.shields.io/maven-central/v/com.graphql-java-kickstart/graphql-spring-boot-starter.svg)
[![GitHub CI Workflow](https://github.com/graphql-java-kickstart/graphql-spring-boot/workflows/ci/badge.svg)](https://github.com/graphql-java-kickstart/graphql-spring-boot/actions?query=workflow%3ACI+branch%3Amaster)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=graphql-java-kickstart_graphql-spring-boot&metric=alert_status)](https://sonarcloud.io/dashboard?id=graphql-java-kickstart_graphql-spring-boot)
[![GitHub contributors](https://img.shields.io/github/contributors/graphql-java-kickstart/graphql-spring-boot)](https://img.shields.io/github/contributors/graphql-java-kickstart/graphql-spring-boot)
[![Discuss on GitHub](https://img.shields.io/badge/GitHub-discuss-orange)](https://github.com/graphql-java-kickstart/graphql-spring-boot/discussions)


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

* **playground-spring-boot-starter**: embeds the **GraphQL Playground** tool for schema
  introspection and query debugging (see [GraphQL Playground](https://github.com/prisma/graphql-playground))


* **graphql-spring-boot-starter-test**: adds testing capabilities to your project,
like the `@GraphQLTest` annotation which is comparable to `@SpringBootTest`

* **voyager-spring-boot-starter**: embed the **Voyager** tool to represent your
GraphQL API as an interactive graph (see [Voyager](https://github.com/APIs-guru/graphql-voyager))
