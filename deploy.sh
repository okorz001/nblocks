#!/bin/sh

set -e
set -x

dist=dist
stage=stage
repo=git@github.com:okorz001/nblocks.git
branch=gh-pages

rm -rf "$stage"
cp -rv "$dist" "$stage"
cd "$stage"
git init .
git checkout -b "$branch"
git add .
git commit --allow-empty -m "Stage site"
git remote add origin "$repo"
git push -f origin "$branch:$branch"
