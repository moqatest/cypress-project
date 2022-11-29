const { defineConfig } = require("cypress");
const { GitHubSocialLogin } = require('cypress-social-logins').plugins

module.exports = defineConfig({


  env: {
    baseUrl: "https://cloud.cypress.io/",
    grepFilterSpecs: true,
    cookieName: ""
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: 'Cypress Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        GitHubSocialLogin: GitHubSocialLogin
      })
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
