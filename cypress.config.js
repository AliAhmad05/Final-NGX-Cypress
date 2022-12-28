import { defineConfig } from "cypress"

export default defineConfig({
  viewportHeight: 1080, // height of the viewport (Browser)
  viewportWidth: 1920, // width of the viewport (Browser)
  e2e: {
    baseUrl: 'http://localhost:4200', // Specify the base URL
    //baseUrl: 'https://app-dev.sharemydine.co.uk',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Specify the spec (Test file) pattern
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'], // Specify the exclude spec (Test file) pattern

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});