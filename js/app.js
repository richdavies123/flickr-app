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
	when('/photos/:photoId', {
		templateUrl: 'partials/detail_photos.html',
		controller: 'DetailPhotoController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);