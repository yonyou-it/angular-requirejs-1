/**
 * Created by lujwa on 15-12-25.
 */
'use strict';
define([
    'angular',
    'angular-ui-router',
    'angularRoute',
    'adminLTEmodule',
    'homeModule'

], function(angular, angularRoute, index, index2) {
    // Declare app level module which depends on views, and components
    return angular.module('myApp', [
        'ngRoute',
       //userdemo
        'myApp.home',
        //adminLTE
        'myApp.adminLTE'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/doc_start'});
    }]);
});

