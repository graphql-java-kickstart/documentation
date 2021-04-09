---
date: 2016-03-08T21:07:13+01:00
title: About GraphQL Java Servlet
weight: 1
type: index
menu:
  main:
    parent: Servlet
---

[![Maven Central](https://img.shields.io/maven-central/v/com.graphql-java-kickstart/graphql-java-servlet.svg)](https://maven-badges.herokuapp.com/maven-central/com.graphql-java-kickstart/graphql-java-servlet)
[![GitHub CI Workflow](https://github.com/graphql-java-kickstart/graphql-java-servlet/actions/workflows/snapshot.yml/badge.svg?branch=master)](https://github.com/graphql-java-kickstart/graphql-java-servlet/actions/workflows/snapshot.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=graphql-java-kickstart_graphql-java-servlet&metric=alert_status)](https://sonarcloud.io/dashboard?id=graphql-java-kickstart_graphql-java-servlet)
[![GitHub contributors](https://img.shields.io/github/contributors/graphql-java-kickstart/graphql-java-servlet)](https://github.com/graphql-java-kickstart/graphql-java-servlet/graphs/contributors)
[![Discuss on GitHub](https://img.shields.io/badge/GitHub-discuss-orange)](https://github.com/graphql-java-kickstart/graphql-java-servlet/discussions)


Implementation of GraphQL Java Servlet including support for Relay.js, Apollo and OSGi out of the box.
This project wraps the Java implementation of GraphQL provided by [GraphQL Java](https://www.graphql-java.com).
The documentation on this site focuses around the usage of the servlet. Although some parts may dive deeper
into the aspects of GraphQL Java as well, make sure to look at the
[GraphQL Java documentation](https://www.graphql-java.com/documentation/latest/) for more in depth details
regarding GraphQL Java itself.

We try to stay up to date with GraphQL Java as much as possible. The current version supports **GraphQL Java 16.1**.

This project requires at least Java 8.

## Quick start

See [Getting started]({{< ref "getting-started/" >}}) for more detailed instructions.

To add `graphql-java-servlet` to your project and get started quickly, do the following.

### Build with Gradle

Make sure `mavenCentral` is amongst your repositories:
```gradle
repositories {
    mavenCentral()
}
```

Add the `graphql-java-servlet` dependency:
```gradle
dependencies {
    compile 'com.graphql-java-kickstart:graphql-java-servlet:11.1.0'
}
```

### Build with Maven

Add the `graphql-java-servlet` dependency:
```xml
<dependency>
  <groupId>com.graphql-java-kickstart</groupId>
  <artifactId>graphql-java-servlet</artifactId>
  <version>11.1.0</version>
</dependency>
```

### Create a Servlet class

Creating the Servlet class requires various parameters to be provided at the moment. We're working on simplifying
this, to make it easier to get started. For now, take a look at [Create a Servlet class]({{< ref "getting-started/#create-a-servlet-class" >}})
to see what's needed to create a Servlet with a schema.

## Using the latest development build

Snapshot versions of the current `master` branch are availble on JFrog. Check the next snapshot version on
[Github](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/gradle.properties)

### Build with Gradle

Add the Snapshot repository:
```gradle
repositories {
    mavenCentral()
    maven { url "https://oss.jfrog.org/artifactory/oss-snapshot-local" }
}
```

### Build with Maven

Add the Snapshot repository:
```xml
<repositories>
  <repository>
    <id>oss-snapshot-local</id>
    <name>jfrog</name>
    <url>https://oss.jfrog.org/artifactory/oss-snapshot-local</url>
    <snapshots>
      <enabled>true</enabled>
      <updatePolicy>always</updatePolicy>
    </snapshots>
  </repository>
</repositories>
```

## Usage
 
The servlet supports the following request formats:
 * GET request to `../schema.json`: Get the result of an introspection query.
 * GET request with query parameters (query only, no mutation):
     * query
     * operationName (optional)
     * variables (optional)
 * POST body JSON object with fields:
     * query
     * operationName (optional)
     * variables (optional)
 * POST multipart part named "graphql" containing JSON object with fields:
     * query
     * operationName (optional)
     * variables (optional)
 * POST multipart parts named "query", "operationName" (optional), and "variables" (optional)
 * POST with Content Type "application/graphql" will treat the HTTP POST body contents as the GraphQL query string
 
## Spring Framework support

To use the servlet with Spring Framework, either use the [Spring Boot starter](https://www.graphql-java-kickstart.com/spring-boot/) or simply define a `ServletRegistrationBean` in a web app:
```java
@Bean
ServletRegistrationBean graphQLServletRegistrationBean(GraphQLSchema schema, ExecutionStrategy executionStrategy, List<GraphQLOperationListener> operationListeners) {
    return new ServletRegistrationBean(new SimpleGraphQLServlet(schema, executionStrategy, operationListeners), "/graphql");
}
```

## GraphQL Subscription support

Subscriptions over WebSocket are fully supported within Spring Boot, but may require some work if you're using another 
framework. There is an example [here](https://github.com/graphql-java-kickstart/samples/tree/master/subscription-with-authentication). 
Internally, [JSR 356](https://www.oracle.com/technical-resources/articles/java/jsr356.html) is used for WebSocket 
support. The endpoint is [GraphQLWebSocketServlet](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/38af304a9da1a57ac7475098b7fccec1b063646b/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/GraphQLWebsocketServlet.java).
