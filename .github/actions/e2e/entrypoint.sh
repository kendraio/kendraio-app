#!/bin/sh -l

DEPLOYMENT_URL=$(curl --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].url')
echo $https://$DEPLOYMENT_URL
npm install npm@latest
npm install
npx wait-on https://$DEPLOYMENT_URL
npx cypress run --config baseUrl="https://$DEPLOYMENT_URL"
