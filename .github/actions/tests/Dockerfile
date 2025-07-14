FROM node:18-bullseye

# Install Chrome for Angular tests (if needed)
RUN apt-get update && \
    apt-get install -y wget gnupg2 && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

# Install Cypress dependencies (optional, if needed)
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev \
    libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 \
    xvfb

# Install Angular CLI globally if needed
RUN npm install -g @angular/cli

# Install project dependencies
COPY package.json package-lock.json ./
RUN npm ci

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]