const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://www.capitaltg.com",
        viewportWidth: 1280,
        viewportHeight: 800,
        retries: 1,
  },
});