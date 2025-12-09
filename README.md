# E2E Tests for Nutrient Workflow

End-to-end tests using Playwright for the Nutrient Workflow application.

Prerequisites

- Node.js (LTS) installed (Node 16+ or newer recommended)
- npm available on your PATH

Setup

1. Install dependencies

```bash
npm ci
# or
npm install
```

2. Install Playwright browsers and OS dependencies (required for CI or fresh machines)

```bash
# Install Playwright browser binaries
npx playwright install

# On some Linux distributions you may also need system dependencies
npx playwright install-deps
```

3. Configure credentials

Copy the example environment file and add your credentials:

```bash
cp config/.env.local.example config/.env.local
```

Edit `config/.env.local` and fill in your credentials:

```env
TEST_USERNAME=your.email
TEST_PASSWORD=your_password_here
BASE_URL=
LOGIN_TIMEOUT=50000
```

Important: Never commit `config/.env.local` to version control. It's already in `.gitignore`.

Configuration

The test configuration is managed through these files:

- `config/.env.local` - Your local credentials (git-ignored)
- `config/.env.local.example` - Template for credentials file
- `config/config.ts` - Configuration loader
- `utils/global-setup.ts` - Global test setup (handles login and saves storage state)
- `playwright.config.ts` - Playwright test configuration

Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run a single test file
npx playwright test src/tests/your-test.spec.ts

# Run a single test with debugging (stop on failure and open inspector)
npx playwright test -g "Your test name" --debug

# Record a trace for failing tests (enabled in playwright config or via CLI)
npx playwright test --trace on-first-retry

# Open last test report
npx playwright show-report
```

Notes about Global Setup and Authentication

- Global Setup (`utils/global-setup.ts`) runs before the test suite and logs in using credentials from `config/.env.local`.
- After successful login, authentication state is saved to a user-specific file based on `TEST_USERNAME`, for example:
  - Storage state: `<username>-storageState.json` (e.g., `pankaj.katkar-storageState.json`)
  - Screenshot: `<username>-after-login.png`
- Tests reuse the saved authentication state so they do not need to log in for every test run.
- This makes it safe for multiple developers to work on the repo without clobbering each other's auth state.

Project Structure

```
e2e-tests/
├── config/
│   ├── .env.local                      # Local credentials (git-ignored)
│   ├── .env.local.example              # Template for credentials
│   └── config.ts                       # Configuration loader
├── constants/
│   └── test-data.ts                    # Test data constants
├── fixtures/
│   └── pages.ts                        # Page object fixtures
├── pages/
│   └── dashBoard.ts                    # Page object models
├── tests/
│   └── *.spec.ts                       # Test specification files
├── utils/
│   └── global-setup.ts                 # Global setup (login)
├── test-results/                       # Test execution results (git-ignored)
├── playwright-report/                  # HTML test reports (git-ignored)
├── playwright.config.ts                # Playwright configuration
├── tsconfig.json                       # TypeScript configuration
├── <username>-storageState.json        # User-specific auth state (git-ignored)
└── <username>-after-login.png          # User-specific screenshot (git-ignored)
```

How It Works

1. Global Setup: `global-setup.ts` logs in using credentials from `config/.env.local` before tests run.
2. Storage State: Authentication state is saved to a user-specific file (e.g., `pankaj.katkar-storageState.json`).
3. Tests: All tests reuse the saved authentication state, so they don't need to log in again.
4. Configuration: Credentials and base URL are centralized in `config/.env.local`.
5. Multi-User Support: Each user gets their own storage state file based on their username, preventing conflicts.

User-Specific Files

The system automatically creates user-specific files based on your `TEST_USERNAME`:
- Storage state: `<username>-storageState.json` (e.g., `pankaj.katkar-storageState.json`)
- Screenshot: `<username>-after-login.png` (e.g., `pankaj.katkar-after-login.png`)

This allows multiple developers to work on the same codebase without their authentication states conflicting.

Security

- Never hardcode credentials in test files.
- Always use the config file for sensitive data.
- Ensure `config/.env.local` is in `.gitignore`.
- Use `config/.env.local.example` to document required variables without exposing actual credentials.

Troubleshooting

- If login times out, increase `LOGIN_TIMEOUT` in `config/.env.local`.
- If tests fail due to missing browsers, run `npx playwright install`.
- For CI, store secrets (TEST_USERNAME, TEST_PASSWORD, BASE_URL) as environment variables or repository secrets and ensure Playwright browsers are installed during the CI job.

---

Updated README to include Playwright browser install and troubleshooting notes.
``` ````

A quick note about applying this change: when I attempted to write the file, I was prompted to confirm which branch to commit to, whether to push directly or open a pull request, and the commit message. Please tell me:

1. Which branch should the update be committed to? (I can use the repository default if you prefer.)
2. Should I push directly to that branch or create a new branch and open a pull request for review?
3. Commit message to use (suggested): "Update README: setup, Playwright browser install, env, running tests, troubleshooting".

Once you provide those three details I can proceed with the update.
