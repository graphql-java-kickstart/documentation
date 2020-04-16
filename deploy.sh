#!/bin/bash
echo -e "Deploying updates to GitHub..."

if [ -n "$GITHUB_AUTH_SECRET" ]
then
    touch ~/.git-credentials
    chmod 0600 ~/.git-credentials
    echo "${GITHUB_AUTH_SECRET}" > ~/.git-credentials
    git config credential.helper store
    git config user.email "graphql-java-kickstart-bot@users.noreply.github.com"
    git config user.name "graphql-java-kickstart-bot"
fi

pwd
BUILD="$(pwd)/public/*"

cd ~
git clone https://github.com/graphql-java-kickstart/graphql-java-kickstart.github.io.git github-pages
cd github-pages
cp -rf "$BUILD" ~/github-pages/.

echo "Add files to git"
git add .
echo "Commit files to git"
git commit -m "Rebuild site"
echo "Push changes to Github Pages"
git push --force origin HEAD:master
