const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", 
    defaultCommandTimeout: 10000, 
    responseTimeout: 20000, 
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", 
    supportFile: "cypress/support/e2e.js", 
    setupNodeEvents(on, config) {
      
      return config;
    },
  },
});