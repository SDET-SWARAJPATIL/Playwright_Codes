import {test,expect} from '@playwright/test';

//grouping can be achived by using describe block
test.describe('Grouping demo 1',()=>{

test('test1',async({page})=>{
    console.log('test1 is running');
    await page.waitForTimeout(3000);
})

test('test2',async({page})=>{
    console.log('test2 is running');
    await page.waitForTimeout(3000);
})
})

test('test3',async({page})=>{
    console.log('test3 is running');
    await page.waitForTimeout(3000);
})

test('test4',async({page})=>{
    console.log('test4 is running');
    await page.waitForTimeout(3000);
})


test('test5',async({page})=>{
    console.log('test5 is running');
    await page.waitForTimeout(3000);
})