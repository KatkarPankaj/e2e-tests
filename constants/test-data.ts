/**
 * Common test data constants used across test suites
 * Centralizing these values makes tests more maintainable
 */

// Page Titles
export const PAGE_TITLES = {
  DEFAULT_DASHBOARD: 'Automation Exercise',
  START_REQUEST: 'Start request',
  VIEW_MY_REQUESTS: 'View My Requests',
  MONITOR_REQUESTS: 'Monitor Requests',
  MANAGE_REQUESTS: 'Manage Requests',
  VIEW_MY_TASKS: 'View My Tasks',
  VIEW_MY_REPORTS: 'View My Reports',
} as const;

// Test Timeouts
export const TIMEOUTS = {
  DEFAULT: 60000,
  SHORT: 30000,
  LONG: 120000,
  NAVIGATION: 10000,
} as const;

// Test Process Names
export const PROCESS_NAMES = {
  CLAVIN_TESTING: 'Clavin Testing',
} as const;

// Expected UI Text
export const UI_TEXT = {
  ACTIONS: 'Actions',
  START_A_REQUEST: 'Start A Request',
  VIEW_MY_REQUESTS: 'View My Requests',
  MONITOR_REQUESTS: 'Monitor Requests',
  MANAGE_REQUESTS: 'Manage Requests',
  VIEW_MY_TASKS: 'View My Tasks',
  VIEW_MY_REPORTS: 'View My Reports',
  BULK_USER_REASSIGN: 'Bulk User Reassign',
  PROCESSES: 'Processes',
  FORMS: 'Forms',
  REPORTS: 'Reports',
  USERS: 'Users',
  GROUPS: 'Groups',
  CATEGORIES: 'Categories',
} as const;

// Tab Names
export const TAB_NAMES = {
  DEFAULT_DASHBOARD: 'Default Dashboard',
  NEW_MODERN_DASH: 'New Modern Dash',
} as const;
