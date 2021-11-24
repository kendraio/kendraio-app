FROM cypress/included:3.2.0

# https://docs.cypress.io/guides/continuous-integration/introduction#Machine-requirements
RUN apt-get update && apt-get install -y curl jq

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
