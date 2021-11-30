---
date: 2021-05-17T07:00:00-05:00
title: Embedded Editors
weight: 100
tags:
  [
    "tooling",
    "embedded",
    "editors",
    "altair",
    "graphiql",
    "voyager",
    "playground",
  ]
menu:
  main:
    identifier: boot-embedded-editors
    parent: Spring Boot
    url: /spring-boot/embedded-editors/
---

The following GraphQL Embedded Editors are bundled for convenience:

- [Altair](#altair)
  - [Configuration Parameters](#configuration-parameters)
- [GraphQL Playground](#graphql-playground)
  - [Configuration Parameters](#configuration-parameters-1)
- [GraphiQL](#graphiql)
  - [Configuration Parameters](#configuration-parameters-2)
- [GraphQL Voyager](#graphql-voyager)
  - [Configuration Parameters](#configuration-parameters-3)

## Altair

[Altair](https://github.com/imolorhe/altair) becomes accessible at the root /altair if the graphql.altair.enabled property is true.

Note that GraphQL server must be available at /graphql/\* context to be discovered by Altair.

### Configuration Parameters

Available Spring Boot configuration parameters (either application.yml or application.properties):

```yaml
altair:
  enabled: true
  mapping: /altair
  subscriptions:
    timeout: 30
    reconnect: false
  static:
    base-path: /
  page-title: Altair
  cdn:
    enabled: false
    version: 4.0.2
  options:
    endpoint-url: /graphql
    subscriptions-endpoint: /subscriptions
    initial-settings:
      theme: dracula
    initial-headers:
      Authorization: "Bearer <your-token>"
  resources:
    initial-query: defaultQuery.graphql
    initial-variables: variables.graphql
    initial-pre-request-script: pre-request.graphql
    initial-post-request-script: post-request.graphql
```

## GraphQL Playground

[GraphQL Playground](https://github.com/prisma/graphql-playground) becomes accessible at root /playground (or as configured in graphql.playground.mapping) if the graphql.playground.enabled property is true.

It uses an embedded GraphQL Playground React, in accordance to the official guide, using the 'minimum HTML' approach.

### Configuration Parameters

Available Spring Boot configuration parameters (either application.yml or application.properties):

```yaml
graphql.playground:
  mapping: /playground
  endpoint: /graphql
  subscriptionEndpoint: /subscriptions
  staticPath.base: my-playground-resources-folder
  enabled: true
  pageTitle: Playground
  cdn:
    enabled: false
    version: latest
  settings:
    editor.cursorShape: line
    editor.fontFamily: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace"
    editor.fontSize: 14
    editor.reuseHeaders: true
    editor.theme: dark
    general.betaUpdates: false
    prettier.printWidth: 80
    prettier.tabWidth: 2
    prettier.useTabs: false
    request.credentials: omit
    schema.polling.enable: true
    schema.polling.endpointFilter: "*localhost*"
    schema.polling.interval: 2000
    schema.disableComments: true
    tracing.hideTracingResponse: true
  headers:
    headerFor: AllTabs
  tabs:
    - name: Example Tab
      query: classpath:exampleQuery.graphql
      headers:
        SomeHeader: Some value
      variables: classpath:variables.json
      responses:
        - classpath:exampleResponse1.json
        - classpath:exampleResponse2.json
```

## GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) becomes accessible at the root `/graphiql` if `graphiql.enabled` application property is set to `true`.

Note that GraphQL server must be available at `/graphql/*` context to be discovered by Graph*i*QL.

### Configuration Parameters

Available Spring Boot configuration parameters (either `application.yml`
or `application.properties`):

```yaml
graphiql:
  mapping: /graphiql
  endpoint:
    graphql: /graphql
    subscriptions: /subscriptions
  subscriptions:
    timeout: 30
    reconnect: false
  basePath: /
  enabled: true
  pageTitle: GraphiQL
  cdn:
    enabled: false
    version: latest
  props:
    resources:
      query: query.graphql
      defaultQuery: defaultQuery.graphql
      variables: variables.graphql
    variables:
      editorTheme: "solarized light"
  headers:
    Authorization: "Bearer <your-token>"
```

By default GraphiQL is served from within the package. This can be configured to be served from CDN
instead, by setting the property `graphiql.cdn.enabled` to `true`.

You are able to set the GraphiQL props as well. The `graphiql.props.variables` group can contain any
of the props as defined at [GraphiQL Usage](https://github.com/graphql/graphiql#usage). Since
setting (large) queries in the properties like this isn't very readable, you can use the properties
in the `graphiql.props.resources` group to set the classpath resources that should be loaded.

Headers that are used when sending the GraphiQL queries can be set by defining them in
the `graphiql.headers` group.

## GraphQL Voyager

[GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) becomes accessible at root /voyager (or as configured in voyager.mapping) if the graphql.voyager.enabled property is true.

Available Spring Boot configuration parameters (either application.yml or application.properties):

### Configuration Parameters

Available Spring Boot configuration parameters (either `application.yml` or `application.properties`):

```yaml
voyager:
  enabled: true
  basePath: /
  mapping: /voyager
  endpoint: /graphql
  cdn:
    enabled: false
    version: latest
  pageTitle: Voyager
  displayOptions:
    skipRelay: true
    skipDeprecated: true
    rootType: Query
    sortByAlphabet: false
    showLeafFields: true
    hideRoot: false
  hideDocs: false
  hideSettings: false
```
