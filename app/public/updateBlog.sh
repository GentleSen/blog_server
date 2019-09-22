#!/bin/bash

cd /root/forezp.github.io
echo start pull from github
git pull
echo start build..
jekyll build --destination=/usr/share/nginx/html