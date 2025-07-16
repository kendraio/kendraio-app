#!/bin/sh -l

export CYPRESS_RECORD_KEY="$3"

echo "::group::General setup"
echo '::echo::off'

npm install
echo "Expected NPM install to have finished!"
# Install s3rver mock globally for the CI environment
npm install -g s3rver
echo "::endgroup::"

FAILURE_COUNT=0

echo "::group::Karma unit tests"
echo "Starting Karma unit tests"
echo '::echo::on'
xvfb-run --auto-servernum npx ng test --watch=false
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
echo "URL loaded, starting S3 mock server and running cypress"
echo "::group::Start S3 mock server"
echo "Starting S3 mock server for binary integrity tests"
echo "Current directory: $(pwd)"
echo "Checking if s3rver_cors.xml exists: $(ls -la cypress/e2e/s3rver_cors.xml 2>/dev/null || echo 'not found')"
echo "S3rver version: $(s3rver --version || echo 'not found')"
s3rver -a 0.0.0.0 -d /tmp/s3rver -p 4568 -s --configure-bucket test-bucket ./cypress/e2e/s3rver_cors.xml &
S3_PID=$!
echo "S3 mock server started with PID: $S3_PID"
echo "Waiting for S3 server to be ready..."
sleep 5
echo "Checking if S3 server is responsive..."
for i in {1..10}; do
  if curl -f http://127.0.0.1:4568 >/dev/null 2>&1; then
    echo "S3 server is ready!"
    break
  fi
  echo "Attempt $i: S3 server not ready yet, waiting..."
  sleep 2
done
echo "::endgroup::"

echo "::group::Cypress E2E tests"

npx cypress run --record --key $3 --config baseUrl="https://$DEPLOYMENT_URL"
if [ $? -ne 0 ]; then
  echo "::error::Cypress E2E tests failed"
  FAILURE_COUNT=$((FAILURE_COUNT+1))
fi
echo "::endgroup::"

echo "::group::Cleanup S3 mock server"
if [ ! -z "$S3_PID" ]; then
  echo "Stopping S3 mock server with PID: $S3_PID"
  kill $S3_PID || true
fi
echo "::endgroup::"

echo $FAILURE_COUNT test groups failed
exit $FAILURE_COUNT