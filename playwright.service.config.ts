import { defineConfig } from '@playwright/test';
import base from './playwright.config';

const wsEndpoint = process.env.PLAYWRIGHT_SERVICE_URL;
if (!wsEndpoint) throw new Error("PLAYWRIGHT_SERVICE_URL missing");

const token = process.env.PLAYWRIGHT_ACCESS_TOKEN;
if (!token) throw new Error("PLAYWRIGHT_ACCESS_TOKEN missing");

export default defineConfig({
  ...base,
  use: {
    ...base.use,
    connectOptions: {
      wsEndpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
});
