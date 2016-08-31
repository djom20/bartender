'use strict';

App.config(['$routeProvider', '$httpProvider', '$locationProvider',
    function($routeProvider, $httpProvider, $locationProvider) {
        Cross.on($httpProvider);
        Routes.on($routeProvider);
    }
]);
