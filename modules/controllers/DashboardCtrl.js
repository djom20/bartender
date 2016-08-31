'use strict';

Appc.controller('DashboardCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        console.log("Init Controller DashboardCtrl");

        $('select').material_select();

        $scope.orders = [];
        $scope.drinkId = 1;
        $scope.amount = 1;

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
            'name': 'Coffee',
            'price': 6
        }, {
            'id': 3,
            'name': 'Expresso',
            'price': 4
        }, {
            'id': 4,
            'name': 'Juice',
            'price': 8
        }, {
            'id': 5,
            'name': 'Martini',
            'price': 10
        }];

        $scope.sumTotal = function() {
            var totals = 0;

            angular.forEach($scope.orders, function(item, key) {
                totals += (item.price * item.count);
            });

            return totals;
        };

        $scope.addOrder = function() {
            var _found = false,
                _drinkId = parseInt($scope.drinkId),
                _amount = parseInt($scope.amount);

            console.log('_drinkId', $scope.drinkId);
            console.log('_amount', _amount);

            if (typeof _amount !== 'undefined' && typeof _drinkId !== 'undefined') {
                angular.forEach($scope.orders, function(item, key) {
                    if (item.id === _drinkId) {
                        item.count += _amount;
                        _found = true;
                        return;
                    }
                });

                if (!_found) {
                    var tempDrink = $scope.searchDrinks(_drinkId);
                    tempDrink.count = _amount;
                    $scope.orders.push(tempDrink);
                }

                $scope.closeModal('#modal1');
            }
        };

        $scope.searchDrinks = function(_idDrink) {
            var item = null;

            angular.forEach($scope.drinks, function(_item, key) {
                if (_item.id === _idDrink) {
                    console.log('found Drink', _idDrink);
                    console.log('drink', _item);
                    item = _item;
                    return;
                }
            });

            return item;
        };

        $scope.openModal = function(_id) {
            $(_id).openModal();
        };

        $scope.closeModal = function(_id) {
            $(_id).closeModal();
        };

        $scope.initValues = function() {
            $scope.amount = 1;
            $scope.drinkId = 1;
        };
    }
]);
