import { defineConfig } from 'cypress'

function formatLogString(logString: string): string {
  return (
    logString
      .replace(/(\r\n|\n|\r)/gm, '') // Remove line breaks
      .replace(/\?data=[\w%+/=-]{50,}/g, '?data=...') // Shorten long ?data= params
      .replace(/"([a-zA-Z_])/g, '"\n$1') // Newline after double quote before letter/underscore
      .replace(/(\d)([a-zA-Z_][\w]*:)/g, '$1\n$2') // Newline before property after digit
      .replace(/(Object|Array\[\d*\])([a-zA-Z_])/g, '$1\n$2') // Newline after 'Object'/'Array[n]' before letter/underscore
      .replace(/(?<!https?):([^\s/])/g, ': $1') // Space after colon unless URL
  );
}

export default defineConfig({
  videosFolder: 'cypress/videos',
  video: false,
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  reporter: 'mochawesome',

  env: {
    AWS_S3_ENDPOINT: 'http://localhost:4568',
    AWS_ACCESS_KEY_ID: 'S3RVER',
    AWS_SECRET_ACCESS_KEY: 'S3RVER',
  },

  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

  watchForFileChanges: false,
  projectId: 'ebzwp1',
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 30000,

  retries: {
    runMode: 0,
    openMode: 0,
  },

  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logToStdout(msg) {
          console.log(formatLogString(msg));
          return null;
        },
        evalNode({ code }) {
          // Give access to useful objects via closure
          return eval(code)
        }
      });
    },
    baseUrl: 'http://127.0.0.1:4200',
    specPattern: 'cypress/e2e/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
    env: {
      AWS_ACCESS_KEY_ID: 'S3RVER',
      AWS_SECRET_ACCESS_KEY: 'S3RVER',
      AWS_S3_ENDPOINT: 'http://localhost:4568',
      AWS_REGION: 'us-east-1',
    }
  },
})
