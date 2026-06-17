import {test, expect} from '@playwright/test';

test('simple Alert  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    //handling the simple alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#alertBtn').click();   //clicking the alert button

        await page.waitForTimeout(2000);

});


test('confirmation Alert  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    //handling the confirmation alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#confirmBtn').click();   //clicking the alert button

        await page.waitForTimeout(2000);

});


test('prompt Alert  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    //handling the prompt alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        const text = await dialog.defaultValue();
        console.log(text);
        await dialog.accept("swaraj");
        await expect(page.locator('#demo')).toHaveText('Hello swaraj! How are you today?');
    });

    await page.locator('#promptBtn').click();   //clicking the alert button

        await page.waitForTimeout(2000);

});
