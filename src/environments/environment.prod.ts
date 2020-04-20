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
  firebaseConfig: {
    apiKey: 'AIzaSyCy5Kj9QL9Ar5zUXmhFYmieQI0VlpryvE4',
    authDomain: 'kendraio-project.firebaseapp.com',
    databaseURL: 'https://kendraio-project.firebaseio.com',
    projectId: 'kendraio-project',
    storageBucket: 'kendraio-project.appspot.com',
    messagingSenderId: '1093183061948',
    appId: '1:1093183061948:web:589b9bc7b5f3e9b20e35b9'
  },
  workflowStoreUrl: 'https://us-central1-kendraioworkflowstorage.cloudfunctions.net/api',
  // authProxyUrl: 'https://kendraio-auth0-proxy-qq0te0iza.now.sh/',
  authProxyUrl: 'https://kendraio-auth0-proxy.now.sh/'
};
