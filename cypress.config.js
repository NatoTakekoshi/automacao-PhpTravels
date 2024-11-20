const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  projectId: "q4mr2v",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    //testIsolation: false,
    baseUrl: 'https://phptravels.com',
    reporte: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },

 

});
