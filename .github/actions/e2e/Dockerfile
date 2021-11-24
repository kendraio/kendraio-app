FROM cypress/included:3.2.0

# https://docs.cypress.io/guides/continuous-integration/introduction#Machine-requirements
RUN apt-get update && apt-get install -y curl jq

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint_b.sh /entrypoint_b.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint_b.sh"]
