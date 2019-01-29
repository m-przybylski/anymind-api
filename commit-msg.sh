#!/bin/bash

#get package version
PACKAGE_VERSION=$(cat projects/api/package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

BRACH_NAME=$(git branch | grep '*' | sed 's/* //')

git commit -m "Update api version to: $PACKAGE_VERSION"
git push origin $BRACH_NAME