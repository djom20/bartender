'use strict';

var $config = {
    directConnect: true,
    baseUrl: 'http://localhost:9000',
    multiCapabilities: [{
        'browserName': 'chrome',
        'name': 'Bartender Test',
        'chromeOptions': {
            'args': ['--start-maximized'],
            'prefs': {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    }],
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
        global._this = user;
        global.brw = browser;
        global.window = brw.driver.manage().window();
        global.chai = require('chai');
        global.expect = chai.expect;
        global.deferred = null;

        // Config promise to Chai
        chai.use(require("sinon-chai"));
        chai.use(require("chai-as-promised"));

        // Rezise the navigator
        window.setSize(1440, 900);
        window.maximize();
    }
};

exports.config = $config;
