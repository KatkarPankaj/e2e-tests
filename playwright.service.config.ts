import { defineConfig } from '@playwright/test';
import config from './playwright.config';

const wsEndpoint = process.env.PLAYWRIGHT_SERVICE_URL;

if (!wsEndpoint) {
  throw new Error(
    "PLAYWRIGHT_SERVICE_URL is not set. It must be a wss:// endpoint for Playwright Workspaces."
  );
}

const token = process.env.PLAYWRIGHT_ACCESS_TOKEN;

if (!token) {
  throw new Error(
    "PLAYWRIGHT_ACCESS_TOKEN is not set. GitHub Actions must export the Bearer token."
  );
}

export default defineConfig({
  ...config,
  use: {
    ...config.use,
    connectOptions: {
      wsEndpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
});
