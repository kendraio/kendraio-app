#!/bin/sh -l
echo "::group::General setup"
npm install
echo "Expected NPM install to have finished!"
echo "::endgroup::"
echo "::group::Karma unit tests"
echo "Starting Karma unit tests"
xvfb-run --auto-servernum npx ng test -- --watch=false
echo "::endgroup::"
echo "::group::E2E Test Setup"
DEPLOYMENT_URL=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].url')
echo "Waiting for url to load:$DEPLOYMENT_URL"
STATE=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')
i=0
while [ "$STATE" != "READY" ]
do
  echo "Waited $i seconds"    
  sleep 2
  i=$((i+2))
  STATE=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')
done

echo "The deployment at:$DEPLOYMENT_URL should be complete"
echo "::endgroup::"
echo "URL loaded, running cypress"
echo "::group::Cypress E2E tests"
npx cypress run --config baseUrl="https://$DEPLOYMENT_URL"
echo "::endgroup::"