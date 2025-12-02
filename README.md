# E2E Tests for Nutrient Workflow

End-to-end tests using Playwright for the Nutrient Workflow application.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Credentials

Copy the example environment file and add your credentials:

```bash
cp config/.env.local.example config/.env.local
```

Edit `config/.env.local` and fill in your credentials:

```env
TEST_USERNAME=your.email@nutrient.io
TEST_PASSWORD=your_password_here
BASE_URL=
LOGIN_TIMEOUT=50000
```

**Important:** Never commit `config/.env.local` to version control. It's already in `.gitignore`.

## Configuration

The test configuration is managed through these files:

- `config/.env.local` - Your local credentials (git-ignored)
- `config/.env.local.example` - Template for credentials file
- `config/config.ts` - Configuration loader
- `utils/global-setup.ts` - Global test setup (handles login)
- `playwright.config.ts` - Playwright test configuration

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run specific test file
npx playwright test src/tests/your-test.spec.ts

# Open test report
npx playwright show-report
```

## Project Structure

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

## How It Works

1. **Global Setup**: Before any tests run, `global-setup.ts` logs in using credentials from `config/.env.local`
2. **Storage State**: Authentication state is saved to a user-specific file (e.g., `pankaj.katkar-storageState.json`)
3. **Tests**: All tests reuse the saved authentication state, so they don't need to log in again
4. **Configuration**: All credentials and URLs are centralized in `config/.env.local`
5. **Multi-User Support**: Each user gets their own storage state file based on their username, preventing conflicts

## User-Specific Files

The system automatically creates user-specific files based on your `TEST_USERNAME`:
- Storage state: `<username>-storageState.json` (e.g., `pankaj.katkar-storageState.json`)
- Screenshot: `<username>-after-login.png` (e.g., `pankaj.katkar-after-login.png`)

This allows multiple developers to work on the same codebase without their authentication states conflicting.

## Security

- Never hardcode credentials in test files
- Always use the config file for sensitive data
- Ensure `config/.env.local` is in `.gitignore`
- Use `config/.env.local.example` to document required variables without exposing actual credentials
