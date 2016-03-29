var myApp = angular.module('flickrApp', [
	'ngRoute',
	'ngAnimate',
	'flickrControllers'
]);

myApp.config([ '$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/list_photos.html',
		controller: 'ListPhotosController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);