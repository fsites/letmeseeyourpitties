angular.module('instagramApp', ['infinite-scroll'])
	.controller('MyCtrl', function($scope, $http) {

		// PARAMETERS CONFIG
		var url = 'https://api.instagram.com/v1/tags/pitbullsofinstagram/media/recent';
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
			.success(function(results, data) {
				$scope.images = results.data;
				$scope.newUrl = results.pagination.next_url; //not working
				console.log('newUrl is ' + $scope.newUrl);
			})
			.error(function() {
				alert("Request failed, try refreshing the page for more pitties.");
			});
		};

		//Executes when user nears end of page
		$scope.onScroll = function() {

			console.log('click works');
			// HTTP REQUEST
			$http({
				url: $scope.newUrl,  
				method: 'JSONP',
		 		params: config,
		 	})
			.success(function(newResults, data) { 
				$scope.newImages = newResults.data;
				$scope.newUrl = newResults.pagination.next_url;
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