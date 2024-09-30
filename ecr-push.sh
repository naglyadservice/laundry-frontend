#!/bin/bash
aws sso login --profile naglyad-admin

aws ecr get-login-password --region eu-central-1 --profile naglyad-admin | docker login --username AWS --password-stdin 474668387779.dkr.ecr.eu-central-1.amazonaws.com

docker buildx build --platform linux/amd64 -t landry/frontend/prod .

docker tag landry/frontend/prod:latest 474668387779.dkr.ecr.eu-central-1.amazonaws.com/landry/frontend/prod:latest

docker push 474668387779.dkr.ecr.eu-central-1.amazonaws.com/landry/frontend/prod:latest
