'use strict';

/**
 * @ngdoc function
 * @name angulearnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulearnApp
 */
angular.module('angulearnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
