# Establish a development environment for Kendraio
# 
# This builds on top of microsoft's codespace container for typescript

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}


# Install additional packages 

# Karma and Cypress both require electron. 
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     && apt-get -y install --no-install-recommends libgtk2.0-0 \
        libgtk-3-0 \
        libgbm-dev \
        libnotify-dev \
        libgconf-2-4 \
        libnss3 \
        libxss1 \
        libasound2 \
        libxtst6 xauth xvfb \
        openssh-server

# Install more global node packages
RUN su node -c "npm install -g @angular/cli cypress --legacy-peer-deps"
