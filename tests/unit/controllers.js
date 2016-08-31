'use strict';

describe('Dashboard Controller', function() {
    var app, ctrl, $http, $location, createController, $scope, $controller,
        expect = chai.expect;

    // Set up the module
    beforeEach(module('qrvey'));

    beforeEach(inject(function($injector) {
        $http = $injector.get('$httpBackend');
        $scope = $injector.get('$rootScope');
        $location = $injector.get('$location');
        $controller = $injector.get('$controller');
        AuthenticationService = $injector.get("AuthenticationService");
        createController = function(_name) {
            return $controller(_name, {
                '$scope': $scope
            });
        };

        ctrl = createController('loginController');
        $http.when('POST', '/login').respond({
            status: 200,
            message: "OK",
            user: {
                userid: "NJliWhV1Z",
                loginVerified: true
            }
        });

        $http.when('GET', '/api/user').respond({
            "username": "NJliWhV1Z",
            "displayName": "sergio.fandino@ideaware.co",
            "email": "sergio.fandino@ideaware.co",
            "loginVerified": true,
            "lastLoginDate": "2016-05-13T20:00:31.309Z",
            "questionDesignHelp": false,
            "shareQrveyHelp": false
        });
    }));

    afterEach(function() {
        $http.flush();
    });

    it('should exist controller', function() {
        expect(ctrl).to.be.defined;
    });

    it('should comparingPassword valid', function() {
        expect($scope.comparingPassword('123456', '123456')).to.be.truth;
        expect($scope.comparingPassword('123456', '123')).to.not.be.truth;
        expect($scope.comparingPassword('123456', '>')).to.not.be.true;
    });

    describe('loginEmail Function', function() {
        it('should registerEmail valid', function() {
            // expect($scope.registerEmail('jonathan.olier@qrvey.com', '123456', 'werewrew')).to.be.true;
            // expect($scope.registerEmail('loco.loco@gmail.co', '123456', '123456')).to.not.be.true;
        });
    });
});
