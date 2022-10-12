import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: 'cypress/videos',
  video: false,
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  reporter: 'mochawesome',
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
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
