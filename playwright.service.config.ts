import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS , ServiceAuth } from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';
import config from './playwright.config';

/* Learn more about service configuration at https://aka.ms/pww/docs/config */
// Ensure PLAYWRIGHT_SERVICE_URL is a WebSocket URL (ws:// or wss://).
// Some CI secret values may be provided as http(s) URLs; the Playwright client
// requires a ws(s) endpoint. Convert http(s) -> ws(s) as a safe fallback.
const normalizeServiceUrl = (url?: string) => {
  if (!url) return url;
  if (/^wss?:/i.test(url)) return url; // already ws/wss
  return url.replace(/^https:/i, 'wss:').replace(/^http:/i, 'ws:');
};

if (process.env.PLAYWRIGHT_SERVICE_URL) {
  process.env.PLAYWRIGHT_SERVICE_URL = normalizeServiceUrl(process.env.PLAYWRIGHT_SERVICE_URL);
}

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 50 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    serviceAuthType: ServiceAuth.ENTRA_ID,
    credential: new DefaultAzureCredential()
  })
);
