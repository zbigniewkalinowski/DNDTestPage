const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:
      "https://65fda9edfe518826bd75a100--papaya-chimera-d41bb0.netlify.app/",
  },
});
