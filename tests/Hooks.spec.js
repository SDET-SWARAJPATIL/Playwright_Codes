import { test, expect } from '@playwright/test';

test.describe('Demo Hooks', () => {
  // Runs once before all tests in this block
  test.beforeAll(async () => {
    console.log('Before All: setup once');
  });

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    console.log('Before Each: open website');
    await page.goto('https://www.google.com');
  });

  // Runs after each test
  test.afterEach(async ({ page }) => {
    console.log('After Each: cleanup');
    await page.close();
  });

  // Runs once after all tests
  test.afterAll(async () => {
    console.log('After All: final cleanup');
  });

  test('homepage title is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Google');
  });

  test('homepage contains heading text', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Share');
  });
});