'use strict';

/**
 * @ngdoc function
 * @name startupweApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the startupweApp
 */
angular.module('startupweApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
