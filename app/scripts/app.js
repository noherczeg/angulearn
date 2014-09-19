'use strict';

/**
 * @ngdoc overview
 * @name angulearnApp
 * @description
 * # angulearnApp
 *
 * Main module of the application.
 */
var angulearn = angular.module('angulearnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
	'ui.router'
  ]);

angulearn.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'MainCtrl',
			templateUrl: '/views/main.html',
            data: {
                pageTitle: 'Home'
            }
        })
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl',
            templateUrl: '/views/about.html',
            data: {
                pageTitle: 'About'
            }
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactCtrl',
            templateUrl: '/views/contact.html',
            data: {
                pageTitle: 'Contact'
            }
        });

    $urlRouterProvider.otherwise('/');

}]); 