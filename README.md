# [GraphQL Kickstart Documentation](https://www.graphql-java-kickstart.com/tools/)
[![Build Status](https://travis-ci.org/graphql-java-kickstart/documentation.svg?branch=master)](https://travis-ci.org/graphql-java-kickstart/documentation)

## Running the site locally
1. Clone this repository
2. Execute `brew install hugo`
3. Execute `hugo server` in the root of the project

## :warning: Do not delete the `public` folder

Deployment of the build depends on a git submodule that is configured in the folder `public`. Deleting this folder
will break deployment and will prevent any updates of the documentation from being published to the Github Pages
website.

If you inadvertently do delete the `public` folder you need to reinstate the submodule. Make sure your changes are
committed (not pushed) and then run the following command:

```
git submodule add --name pages https://github.com/graphql-java-kickstart/graphql-java-kickstart.github.io.git public
```

That should clone the module into `public` again and fix the build. When looking at the source folders in Github
you'll notice the `public` folder has a special folder icon of two folders instead of one and clicking the link
will redirect you to the linked git repository instead of opening a normal folder.
