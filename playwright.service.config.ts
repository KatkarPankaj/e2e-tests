import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS , ServiceAuth } from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';
import config from './playwright.config';

/* Learn more about service configuration at https://aka.ms/pww/docs/config */
export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 50 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    serviceAuthType: ServiceAuth.ACCESS_TOKEN
  })
);
