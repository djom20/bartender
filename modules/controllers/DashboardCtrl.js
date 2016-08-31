'use strict';

Appc.controller('DashboardCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        console.log("Init Controller DashboardCtrl");

        $scope.orders = [];

        // $scope.orders = [{
        //     'id': 1,
        //     'name': 'Beer',
        //     'price': 6,
        //     'count': 3
        // }, {
        //     'id': 2,
        //     'name': 'Juice',
        //     'price': 8,
        //     'count': 6
        // }, {
        //     'id': 3,
        //     'name': 'Expresso',
        //     'price': 4,
        //     'count': 1
        // }, {
        //     'id': 4,
        //     'name': 'Martini',
        //     'price': 10,
        //     'count': 9
        // }, {
        //     'id': 5,
        //     'name': 'Coffee',
        //     'price': 6,
        //     'count': 5
        // }];

        $scope.drinks = [{
            'id': 1,
            'name': 'Beer',
            'price': 6
        }, {
            'id': 2,
            'name': 'Juice',
            'price': 8
        }, {
            'id': 3,
            'name': 'Expresso',
            'price': 4
        }, {
            'id': 4,
            'name': 'Martini',
            'price': 10
        }, {
            'id': 5,
            'name': 'Coffee',
            'price': 6
        }];


        $scope.sumTotal = function() {
            var totals = 0;

            angular.forEach($scope.orders, function(item, key) {
                totals += (item.price * item.count);
            });

            return totals;
        };

        $scope.addOrder = function(_orderId) {
            var found = false;
            angular.forEach($scope.orders, function(item, key) {
                if (item.id === _orderId) {
                    item.count++;
                    found = true;
                    return;
                }
            });

            if (!found) {
                var tempDrink = $scope.searchDrinks(_orderId);
                $scope.orders.push(tempDrink);
            }
        };

        $scope.searchDrinks = function(_idDrink) {
            angular.forEach($scope.drinks, function(item, key) {
                if (item.id === _idDrink) {
                    return item;
                }
            });
        };
    }
]);
