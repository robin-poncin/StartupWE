'use strict';

/**
 * @ngdoc overview
 * @name startupweApp
 * @description
 * # startupweApp
 *
 * Main module of the application.
 */
angular
  .module('startupweApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: ''
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
