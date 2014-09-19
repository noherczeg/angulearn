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
	'ui.router',
	'pascalprecht.translate'
  ]);

angulearn.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'MainCtrl',
			templateUrl: '/views/main.html',
            data: {
                pageTitle: 'home'
            }
        })
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl',
            templateUrl: '/views/about.html',
            data: {
                pageTitle: 'about'
            }
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactCtrl',
            templateUrl: '/views/contact.html',
            data: {
                pageTitle: 'contact'
            }
        });

    $urlRouterProvider.otherwise('/');

}]);

angulearn.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/languages/',
        suffix: '.json'
	});
    $translateProvider.preferredLanguage('en_US');
    $translateProvider.fallbackLanguage('hu_HU');
}]);

// .run is called in the bootstrap process
angulearn.run(['$rootScope', '$state', '$translate', '$cookieStore', function ( $rootScope, $state, $translate, $cookieStore ) {
	
	var lang = $cookieStore.get('ui-language');
	var defaultLanguage = 'hu_HU';
	if (!lang) {
		$rootScope.uiLanguage = defaultLanguage;
		$cookieStore.put(defaultLanguage);
	} else {
		$rootScope.uiLanguage = lang;
	}
	$translate.use($rootScope.uiLanguage);
	
	// state check workaround
	$rootScope.$state = $state;
	
	$rootScope.changeLanguage = function (langKey) {
		$rootScope.uiLanguage = langKey;
        $cookieStore.put('ui-language', langKey);
        $translate.use(langKey);
    };
	
	$rootScope.$on('$stateChangeSuccess', function(event, toState){
		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$rootScope.pageTitle = $translate.instant(toState.data.pageTitle) + ' | Angulearn' ;
		}
	});
}]);