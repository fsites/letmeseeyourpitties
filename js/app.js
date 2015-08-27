angular.module('instagramApp', ['infinite-scroll'])
	.controller('MyCtrl', function($scope, $http) {

		// PARAMETERS CONFIG
		var url = 'https://api.instagram.com/v1/tags/' + 'pitbullsofinstagram' + '/media/recent';
		var config = {
			'client_id': 'fe58bbb1a5724d1395b66b3f3728d11c',
			'count': 30,
			'callback': 'JSON_CALLBACK'
		};

		//loads initial images
		initImages();

		//Initial request function
		function initImages() {

			// INITIAL REQUEST
			$http({
				url: url,
				method: 'JSONP',
			 	params: config,
			})
			.success(function(results, url) {
				$scope.images = results.data;
				$scope.loadStatus = 1;
				console.log($scope.images);
				$scope.newUrl = url.pagination.next_url; //not working
			})
			.error(function() {
				console.log("request failed.");
			});
		};

		//Executes when user nears end of page
		$scope.onScroll = function() {

			// HTTP REQUEST
			$http({
				url: $scope.newUrl,  //not working, not sure how to access pagination url
				method: 'JSONP',
		 		params: $scope.config,
		 	})
			.success(function(newResults) { //request unsuccessful
				$scope.newImages = newResults.data; //not working
				console.log("more results request success");
				console.log($scope.newImages);
			})
			.error(function() {
				console.log("failed to load more images");
			});
		};

	});



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af