import { defineConfig } from 'cypress'

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
    runMode: 2,
    openMode: 2,
  },

  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      // Setup any needed tasks here
    },
    baseUrl: 'http://localhost:4200',
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
