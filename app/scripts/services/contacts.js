'use strict';

/**
 * @ngdoc service
 * @name angulearnApp.contacts
 * @description
 * # contacts
 * Service in the angulearnApp.
 */
angular.module('angulearnApp')
  .service('Contacts', ['$http', function contacts($http) {
    return {
        getAll: function() {
            return $http.get('/repository/contacts.json');
        }
    };
  }]);
