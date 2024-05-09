const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
