var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('ListPhotosController', ['$scope', '$http', function ListPhotosController($scope, $http){
    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json').success(function(data) {

    });
	// Used this answer on stack overflow for guidance
	// http://stackoverflow.com/questions/28373389/printing-flickr-api-response-to-console-angularjs
	jsonFlickrFeed = function(data){
		$scope.data = data;
		// Get the items from the JSON file
		$scope.photos = data.items;
	}

}]);

flickrControllers.controller('DetailPhotoController', ['$scope','$http', '$sce', '$routeParams', '$filter', function DetailPhotoController($scope, $http, $sce, $routeParams, $filter){
	$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json').success(function(data) {

    });
	jsonFlickrFeed = function(data){
		$scope.data = data;
		$scope.photos = data.items;
		// Get the ID from the URL and use this in the template details.html
		// to lookup the index of that item in the JSON file
		$scope.whichItem = $routeParams.photoId;
		// Parse the HTML in the description
        $scope.toTrustedHTML = function( html ){
            return $sce.trustAsHtml( html );
        }
	}
}]);