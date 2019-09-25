/**
 * This is the dev environment configuration
 * It is use for the now.sh hosted site at
 * https://dev.app.kendra.io
 * This version is built from the develop branch
 * Track progress on GitHub here:
 * https://github.com/kendraio/kendraio-app/pull/25
 */
export const environment = {
  urlPrefix: 'https://dev.app.kendra.io/',
  production: false,
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
  workflowStoreUrl: 'https://us-central1-kendraioworkflowstorage.cloudfunctions.net/api'
};
