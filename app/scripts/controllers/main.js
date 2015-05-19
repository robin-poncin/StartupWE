'use strict';

/**
 * @ngdoc function
 * @name startupweApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the startupweApp
 */
angular.module('startupweApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
