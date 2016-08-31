'use strict';

var $config = {
    directConnect: true,
    baseUrl: 'http://localhost:9000',
    capabilities: {
        'browserName': 'chrome',
        'name': 'Bartender Test',
        'shardTestFiles': false
    },
    specs: [
        'features/user_takes_orders.feature'
    ],
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['steps/user_takes_orders_steps.js', 'support/user.js'],
        format: 'pretty',
        tags: ['@complete'],
        keepAlive: false
    },
    onPrepare: function() {
        global.user = require('./support/user');
        global.chai = require('chai');
        global.expect = chai.expect;

        // Config promise to Chai
        chai.use(require("sinon-chai"));
        chai.use(require("chai-as-promised"));

        // Rezise the navigator
        browser.driver.manage().window().setSize(1440, 900);
        browser.driver.manage().window().maximize();
    }
};

exports.config = $config;
