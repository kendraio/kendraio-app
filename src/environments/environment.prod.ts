/**
 * This is the main environment configuration
 * It is use for the Firebase hosted site at
 * https://app.kendra.io
 * This version is built from the master branch.
 */
export const environment = {
  urlPrefix: 'https://app.kendra.io/',
  production: true,
  adapterBaseUrl: 'https://kendraio.github.io/kendraio-adapter/',
  adapterConfig: 'https://kendraio.github.io/kendraio-adapter/config.json',
  auth0: {
    clientID: 'BpSIsaDagBnDpAZyfJOVoAqG1r041Nj7',
    domain: 'kendraio.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'https://kendraio-project.firebaseapp.com/callback',
    audience: 'https://kendraio.eu.auth0.com/api/v2/',
    scope: 'openid profile'
  },
  workflowStoreUrl: 'https://app.kendra.io/api',
  // authProxyUrl: 'https://kendraio-auth0-proxy-qq0te0iza.now.sh/',
  authProxyUrl: 'https://kendraio-auth0-proxy.now.sh/',
  uphold: {
    proxy: 'https://uphold-proxy.kendra.io/',
    apiRoot: 'https://api.uphold.com/',
    siteRoot: 'https://uphold.com/',
    clientID: '83ca2ad1489b3d8935b130ba523508f3733002c5'
  },
  corsProxyUrl: 'https://proxy.kendra.io'
};
