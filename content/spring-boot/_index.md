---
date: 2016-03-08T21:07:13+01:00
title: About GraphQL Spring Boot
weight: 1
menu:
  main:
    parent: Spring Boot
---

[![Maven Central](https://img.shields.io/maven-central/v/com.graphql-java-kickstart/graphql-spring-boot-starter.svg)](https://maven-badges.herokuapp.com/maven-central/com.graphql-java-kickstart/graphql-spring-boot-starter)
[![GitHub CI Workflow](https://github.com/graphql-java-kickstart/graphql-spring-boot/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/graphql-java-kickstart/graphql-spring-boot/actions/workflows/ci.yml?query=workflow%3ACI+branch%3Amaster)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=graphql-java-kickstart_graphql-spring-boot&metric=alert_status)](https://sonarcloud.io/dashboard?id=graphql-java-kickstart_graphql-spring-boot)
[![GitHub contributors](https://img.shields.io/github/contributors/graphql-java-kickstart/graphql-spring-boot)](https://github.com/graphql-java-kickstart/graphql-spring-boot/graphs/contributors)
[![Discuss on GitHub](https://img.shields.io/badge/GitHub-discuss-orange)](https://github.com/graphql-java-kickstart/graphql-spring-boot/discussions)

This library contains two Spring Boot starters to enable GraphQL related
services or features.

## Starters

- **graphql-spring-boot-starter**: turns your Spring Boot application into
  a GraphQL Server using [GraphQL Servlet]({{< relref "/servlet/getting-started/index.md" >}})
  and [GraphQL Java Tools]({{< relref "/tools/" >}})

- **graphql-spring-boot-starter-test**: adds testing capabilities to your project,
  like the `@GraphQLTest` annotation which is comparable to `@SpringBootTest`
