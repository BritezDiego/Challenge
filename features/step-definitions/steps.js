const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When('Search for pilas', async() => {
    await LoginPage.search()
})


Then('I should see a the total items result', async() => {
  await LoginPage.totalResult()
})




