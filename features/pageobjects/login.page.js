
const { results } = require('webdriverio');
const Page = require('./page');


class LoginPage extends Page {

    get searchBarId () {
        return $('#gh-ac');
    }

    get searchBtn () {
        return $('#gh-btn');
    }

    get results () {
        return $('#mainContent > div.s-answer-region.s-answer-region-center-top > div > div.clearfix.srp-controls__row-2 > div:nth-child(1) > div.srp-controls__control.srp-controls__count > h1');
    }

    async search () {
        await this.searchBarId.click();
        await this.searchBarId.setValue("Pilas");
        await this.searchBtn.click();
    
    }

    async totalResult (){
       await this.results.isDisplayed();
       await this.results.getText();
       console.log (this.results.getText())
    }


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
