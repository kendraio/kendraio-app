// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  urlPrefix: 'http://localhost:4200/',
  production: false,
  adapterBaseUrl: 'https://kendraio.github.io/kendraio-adapter/',
  adapterConfig: 'https://kendraio.github.io/kendraio-adapter/config.json',
  auth0: {
    clientID: 'BpSIsaDagBnDpAZyfJOVoAqG1r041Nj7',
    domain: 'kendraio.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://kendraio.eu.auth0.com/api/v2/',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  },
  workflowStoreUrl: 'http://localhost:5001/kendraio-project/us-central1/api/api',
  authProxyUrl: 'https://kendraio-auth0-proxy.now.sh/',
  // authProxyUrl: 'http://localhost:3000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
