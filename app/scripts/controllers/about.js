'use strict';

/**
 * @ngdoc function
 * @name angulearnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulearnApp
 */
angular.module('angulearnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
