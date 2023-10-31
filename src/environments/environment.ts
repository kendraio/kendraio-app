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
  workflowStoreUrl: 'https://app.kendra.io/api',
  authProxyUrl: 'https://kendraio-auth0-proxy.vercel.app/',
  // authProxyUrl: 'http://localhost:3000/',
  uphold: {
    proxy: 'https://uphold-proxy.kendra.io/',
    apiRoot: 'https://api.uphold.com/',
    siteRoot: 'https://uphold.com/',
    clientID: '83ca2ad1489b3d8935b130ba523508f3733002c5'
  },
  corsProxyUrl: 'https://proxy.kendra.io'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
