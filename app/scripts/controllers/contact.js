'use strict';

/**
 * @ngdoc function
 * @name angulearnApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angulearnApp
 */
angular.module('angulearnApp')
  .controller('ContactCtrl', ['$scope', 'Contacts', function ($scope, Contacts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	Contacts.getAll().success(function(data) {
		$scope.contacts = data;
	});
  }]);
