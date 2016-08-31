'use strict';

module.exports = function() {

    var Given = this.Given,
        When = this.When,
        Then = this.Then;

    Given(/^the user has not orders$/, function(cb) {
        cb();
    });

    Given(/^the user has orders$/, function(cb) {
        cb(null, 'pending');
    });

    When(/^the user is in dashboard$/, function(cb) {
        user.goTo('/dashboard').then(function() {
            expect(browser.getCurrentUrl()).to.eventually.contain('dashboard');
        }).then(cb);
    });

    Then(/^the orders should not be displayed$/, function(cb) {
        expect(user.getCountList()).to.eventually.be.empty.and.notify(cb);
    });

    Then(/^the orders should be displayed$/, function(cb) {
        expect(user.getCountList()).to.eventually.not.be.empty.and.notify(cb);
    });

    Then(/^the total should be equal zero$/, function(cb) {
        expect(user.getResultsPrices()).to.eventually.be.equal('0').and.notify(cb);
    });

    Then(/^the total should not be equal zero$/, function(cb) {
        expect(user.getResultsPrices()).to.eventually.not.be.equal('0').and.notify(cb);
    });

    When(/^the user clicks on Add Order$/, function(cb) {
        cb(null, 'pending');
    });

    When(/^the user selects the drink$/, function(cb) {
        cb(null, 'pending');
    });

    When(/^the user selects the amount$/, function(cb) {
        cb(null, 'pending');
    });

    When(/^the user clicks on Ok$/, function(cb) {
        cb(null, 'pending');
    });

    Then(/^the drink should be displayed$/, function(cb) {
        cb(null, 'pending');
    });

    Then(/^the amount should be displayed$/, function(cb) {
        cb(null, 'pending');
    });

    Then(/^the price should be displayed$/, function(cb) {
        cb(null, 'pending');
    });
};
