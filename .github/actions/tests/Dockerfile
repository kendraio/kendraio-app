FROM cypress/included:8.4.1

# Install Node 16
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    node --version && npm --version

# https://docs.cypress.io/guides/continuous-integration/introduction#Machine-requirements
RUN apt-get update && apt-get install -y curl jq
# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
