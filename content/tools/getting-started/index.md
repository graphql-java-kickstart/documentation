---
date: 2018-11-07T00:11:02+01:00
title: Getting started
weight: 10
menu:
  main:
    identifier: tools-getting-started
    parent: Tools
    url: /tools/getting-started/
---

A working [Java Spring-Boot application](https://github.com/graphql-java-kickstart/samples/tree/master/tools-hello-world) is provided,
based off the [Star Wars API](https://github.com/graphql-java/graphql-java/blob/master/src/test/groovy/graphql/StarWarsSchema.java) tests
and [test data](https://github.com/graphql-java/graphql-java/blob/master/src/test/groovy/graphql/StarWarsData.groovy).
If you're using Spring Boot, check out the [graphql-spring-boot-starter](https://github.com/graphql-java-kickstart/graphql-spring-boot)!

A working [Kotlin example](https://github.com/graphql-java-kickstart/graphql-java-tools/blob/master/src/test/kotlin/graphql/kickstart/tools/EndToEndSpecHelper.kt) can be found in the tests.

## Quick start

To add `graphql-java-tools` to your project and get started quickly, do the following.

### Build with Gradle

Make sure `mavenCentral` is amongst your repositories:

```gradle
repositories {
    mavenCentral()
}
```

Add the `graphql-java-tools` dependency:

```gradle
dependencies {
    compile 'com.graphql-java-kickstart:graphql-java-tools:12.0.1'
}
```

### Build with Maven

Add the `graphql-java-tools` dependency:

```xml
<dependency>
  <groupId>com.graphql-java-kickstart</groupId>
  <artifactId>graphql-java-tools</artifactId>
  <version>12.0.1</version>
</dependency>
```

## Using the latest development build

Snapshot versions of the current `master` branch are available on JFrog. Check the next snapshot version on
[Github](https://github.com/graphql-java-kickstart/graphql-java-tools/blob/master/pom.xml#L7)

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
