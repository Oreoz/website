import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
