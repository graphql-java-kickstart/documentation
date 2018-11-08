---
date: 2016-03-08T21:07:13+01:00
title: About GraphQL Java Servlet
type: index
weight: 0
---

Implementation of GraphQL Java Servlet including support for Relay.js, Apollo and OSGi out of the box.
This project wraps the Java implementation of GraphQL provided by [GraphQL Java](https://www.graphql-java.com).
The documentation on this site focuses around the usage of the servlet. Although some parts may dive deeper
into the aspects of GraphQL Java as well, make sure to look at the 
[GraphQL Java documentation](https://www.graphql-java.com/documentation/latest/) for more in depth details
regarding GraphQL Java itself. 

We try to stay up to date with GraphQL Java as much as possible. The current version supports **GraphQL Java 10.0**.
 
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
    compile 'com.graphql-java-kickstart:graphql-java-servlet:6.2.0'
}
```

### Build with Maven

Add the `graphql-java-servlet` dependency:
```xml
<dependency>
  <groupId>com.graphql-java-kickstart</groupId>
  <artifactId>graphql-java-servlet</artifactId>
  <version>6.2.0</version>
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
    maven { url "http://oss.jfrog.org/artifactory/oss-snapshot-local" }
}
```

### Build with Maven

Add the Snapshot repository:
```xml
<repositories>
  <repository>
    <id>oss-snapshot-local</id>
    <name>jfrog</name>
    <url>http://oss.jfrog.org/artifactory/oss-snapshot-local</url>
    <snapshots>
      <enabled>true</enabled>
      <updatePolicy>always</updatePolicy>
    </snapshots>
  </repository>
</repositories>
```
