var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('ListPhotosController', ['$scope', '$http', function ListPhotosController($scope, $http){
    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json').success(function(data) {
    
    });

	jsonFlickrFeed = function(data){
		$scope.data = data;
		$scope.photos = data.items;
	}
  
}]);