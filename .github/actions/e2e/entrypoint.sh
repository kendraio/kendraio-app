#!/bin/sh -l
DEPLOYMENT_URL=$(curl --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].url')
echo "Waiting for url to load:$DEPLOYMENT_URL"
STATE=$(curl --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')

while [ "$STATE" != "READY" ]
do
  echo "waiting"    
  sleep 5
  STATE=$(curl --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')
done

echo "The deployment at:$DEPLOYMENT_URL should be complete"
npm install
echo "URL loaded, running cypress"
npx cypress run --config baseUrl="https://$DEPLOYMENT_URL"
