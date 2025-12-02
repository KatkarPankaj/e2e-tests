import { defineConfig } from '@playwright/test';
import base from './playwright.config';

/**
 * Normalize service URL to wss:// if https:// is provided
 */
const normalizeWs = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith('ws://') || url.startsWith('wss://')) return url;
  return url.replace(/^https:\/\//, 'wss://').replace(/^http:\/\//, 'ws://');
};

const wsEndpoint = normalizeWs(process.env.PLAYWRIGHT_SERVICE_URL);
if (!wsEndpoint) throw new Error('PLAYWRIGHT_SERVICE_URL is missing or invalid');

const token = process.env.PLAYWRIGHT_ACCESS_TOKEN;
if (!token) throw new Error('PLAYWRIGHT_ACCESS_TOKEN is missing');

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
