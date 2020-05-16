---
date: 2020-05-15T09:28:02+01:00
title: OSGi
weight: 100
menu:
  main:
    parent: Servlet
    url: /servlet/osgi/
---

The [OsgiGraphQLHttpServlet](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/OsgiGraphQLHttpServlet.java) uses a "provider" model to supply the servlet with the required objects:
* [GraphQLQueryProvider](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/osgi/GraphQLQueryProvider.java): Provides query fields to the GraphQL schema.
* [GraphQLMutationProvider](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/osgi/GraphQLMutationProvider.java): Provides mutation fields to the GraphQL schema.
* [GraphQLTypesProvider](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/osgi/GraphQLTypesProvider.java): Provides type information to the GraphQL schema.
* [ExecutionStrategyProvider](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-kickstart/src/main/java/graphql/kickstart/execution/config/ExecutionStrategyProvider.java): Provides an execution strategy for running each query.
* [GraphQLContextBuilder](https://github.com/graphql-java-kickstart/graphql-java-servlet/blob/master/graphql-java-servlet/src/main/java/graphql/kickstart/servlet/context/GraphQLServletContextBuilder.java): Builds a context for running each query.

## Examples

You can now find some example on how to use graphql-java-servlet.

### Requirements

The OSGi examples use Maven as a build tool because it requires plugins that are not (yet) available for Gradle.
Therefore you will need Maven 3.2+.

### Building & running the OSGi examples

You can build the OSGi examples sub-projects by simply executing the following command from the examples/osgi directory:

    mvn clean install
     
This will generate a complete Apache Karaf distribution in the following files:
     
     examples/osgi/apache-karaf-package/target/graphql-java-servlet-osgi-examples-apache-karaf-package-VERSION.tar.gz(.zip)
     
You can simply uncompress this file and launch the OSGi server using the command from the uncompressed directory:

    bin/karaf
    
You should then be able to access the GraphQL endpoint at the following URL once the server is started:

    http://localhost:8181/graphql/schema.json
    
If you see the JSON result of an introspection query, then all is ok. If not, check the data/log/karaf.log file for 
any errors.
    
We also provide a script file to do all of the building and running at once (only for Linux / MacOS):

    ./buildAndRun.sh

### Deploying inside Apache Karaf server

You can use the graphql-java-servlet as part of an Apache Karaf feature, as you can see in the example project here:
* [pom.xml](examples/osgi/apache-karaf-feature/pom.xml)

And here is a sample src/main/feature/feature.xml file to add some dependencies on other features:
* [feature.xml](examples/osgi/apache-karaf-feature/src/main/feature/feature.xml)

### Example GraphQL provider implementation

Here's an example of a GraphQL provider that implements three interfaces at the same time.

* [ExampleGraphQLProvider](examples/osgi/providers/src/main/java/graphql/servlet/examples/osgi/ExampleGraphQLProvider.java)
