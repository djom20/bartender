'use strict';

App.run(['$rootScope', '$location',
    function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            // Filters to routes
        });
    }
]);
