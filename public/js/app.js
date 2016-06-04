angular.module("ChordApp", ['ChordCtrls', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('composer', {
		url: '/',
		templateUrl: 'views/composer.html',
		controller: 'ComposerCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html'
	});

	//$locationProvider.html5Mode(false).hashPrefix('!');
}]);