'use strict';

var User = function() {
    this.goTo = function(_slug) {
        return browser.manage().deleteAllCookies().then(function() {
            browser.get(browser.baseUrl + '/#' + _slug);
        });
    };

    this.getCountList = function() {
        return element.all(by.repeater('ord in orders'));
    };

    this.getResultsPrices = function() {
        return element(by.css('.setTotal')).getInnerHtml();
    };
};

module.exports = new User();
