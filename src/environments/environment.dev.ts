/**
 * This is the dev environment configuration
 * It is use for the now.sh hosted site at
 * https://dev.app.kendra.io
 * This version is built from the develop branch
 * Track progress on GitHub here:
 * https://github.com/kendraio/kendraio-app/pull/17
 */
export const environment = {
  urlPrefix: "https://dev.app.kendra.io/",
  production: false,
  adapterBaseUrl: "https://kendraio.github.io/kendraio-adapter/",
  adapterConfig: "https://kendraio.github.io/kendraio-adapter/config.json",
  auth0: {
    clientID: "BpSIsaDagBnDpAZyfJOVoAqG1r041Nj7",
    domain: "kendraio.eu.auth0.com",
    responseType: "token id_token",
    redirectUri: "https://kendraio-project.firebaseapp.com/callback",
    audience: "https://kendraio.eu.auth0.com/api/v2/",
    scope: "openid profile",
  },
  workflowStoreUrl: "https://app.kendra.io/api",
  authProxyUrl: "https://kendraio-auth0-proxy.vercel.app/",
  uphold: {
    proxy: "https://uphold-proxy.kendra.io/",
    apiRoot: "https://api-sandbox.uphold.com/",
    siteRoot: "https://sandbox.uphold.com/",
    clientID: "3f334a0f7713909bc572015946845e14314273c6",
  },
  corsProxyUrl: "https://proxy.kendra.io",
};
