// import * as dotenv from 'dotenv';
// import * as path from 'path';
// import * as fs from 'fs';

// // Load environment variables from config/.env.local file
// const envPath = path.resolve(__dirname, '.env.local');

// // Check if .env.local exists, otherwise throw an error
// if (!fs.existsSync(envPath)) {
//   throw new Error(
//     `.env.local file not found at ${envPath}\n` +
//     'Please copy config/.env.local.example to config/.env.local and fill in your credentials.'
//   );
// }

// dotenv.config({ path: envPath });

// // Validate required environment variables
// const requiredVars = ['TEST_USERNAME', 'TEST_PASSWORD', 'BASE_URL'];
// const missingVars = requiredVars.filter(varName => !process.env[varName]);

// if (missingVars.length > 0) {
//   throw new Error(
//     `Missing required environment variables: ${missingVars.join(', ')}\n` +
//     'Please check your .env.local file.'
//   );
// }

// // Generate user-specific file names based on username
// const getUserSpecificFileName = (username: string, extension: string): string => {
//   // Extract the local part of email (before @) and sanitize it
//   const sanitizedUsername = username.split('@')[0].replace(/[^a-zA-Z0-9]/g, '-');
//   return `./${sanitizedUsername}${extension}`;
// };

// export const config = {
//   testUsername: process.env.TEST_USERNAME!,
//   testPassword: process.env.TEST_PASSWORD!,
//   baseUrl: process.env.BASE_URL!,
//   loginTimeout: parseInt(process.env.LOGIN_TIMEOUT || '50000', 10),
//   storageStatePath: getUserSpecificFileName(process.env.TEST_USERNAME!, '-storageState.json'),
//   screenshotPath: getUserSpecificFileName(process.env.TEST_USERNAME!, '-after-login.png'),
// };
