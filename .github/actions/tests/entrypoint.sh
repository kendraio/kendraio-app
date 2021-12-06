#!/bin/sh -l
echo "::group::General setup"
echo '::echo::off'
# Assert the key exists, and exit with code 404 if not
echo '::echo::on'
export CYPRESS_RECORD_KEY=$3
echo -n "$CYPRESS_RECORD_KEY" | sha1sum | awk '{print $1}'
if [ ! -f "$CYPRESS_RECORD_KEY" ]; then
  echo "::error:: Could not find cypress record key"
  exit 404
fi
echo '::echo::off'

npm install
echo "Expected NPM install to have finished!"
echo "::endgroup::"

FAILURE_COUNT=0

echo "::group::Karma unit tests"
echo "Starting Karma unit tests"
echo '::echo::on'
xvfb-run --auto-servernum npx ng test -- --watch=false
if [ $? -ne 0 ]; then
  echo "::error::Karma unit tests failed"
  FAILURE_COUNT=$((FAILURE_COUNT+1))
fi
echo "::endgroup::"
echo "::group::E2E Test Setup"
echo '::echo::off'
DEPLOYMENT_URL=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].url')
echo '::echo::on'
echo "Waiting for url to load:$DEPLOYMENT_URL"
echo '::echo::off'
STATE=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')
i=0
while [ "$STATE" != "READY" ]
do
  echo '::echo::on'
  echo "Waited $i seconds"
  echo '::echo::off'    
  sleep 2
  i=$((i+2))
  STATE=$(curl --silent --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v5/deployments?meta-githubRepo=${2}" | jq -r '.deployments[0].state')
done
echo '::echo::on'
echo "The deployment at:$DEPLOYMENT_URL should be complete"
echo "::endgroup::"
echo "URL loaded, running cypress"
echo "::group::Cypress E2E tests"

npx cypress run --record --key $3 --config baseUrl="https://$DEPLOYMENT_URL"
if [ $? -ne 0 ]; then
  echo "::error::Cypress E2E tests failed"
  FAILURE_COUNT=$((FAILURE_COUNT+1))
fi
echo "::endgroup::"

echo $FAILURE_COUNT test groups failed
exit $FAILURE_COUNT