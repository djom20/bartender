'use strict';

var Routes = {
    on: function($routeProvider) {
        console.log('Routes On');

        $routeProvider
            .when('/dashboard', {
                templateUrl: 'modules/views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    },
    off: function($routeProvider) {
        console.log('Routes Off');
    }
};
