import { test, expect } from '@playwright/test';

test('Popup Handling Demo', async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const [page1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#PopUp').click()
    ]);

    await page1.waitForLoadState();

    const text = await page1.locator('h1').textContent();

    console.log(text);

    await page.waitForTimeout(5000);
});




test('new tab Handling Demo', async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');



    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//button[text()="New Tab"]').click()
    ]);

    await page2.waitForLoadState();

    await expect(page2).toHaveTitle('SDET-QA Blog');

    await page.waitForTimeout(5000);
});