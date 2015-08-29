angular.module('instagramApp', ['infinite-scroll'])
	.controller('MyCtrl', function($scope, $http) {

//Loads initial images
		initImages();

// PARAMETERS CONFIG
		var url = 'https://api.instagram.com/v1/tags/pitbullsofinstagram/media/recent';
		var config = {
			'client_id': 'fe58bbb1a5724d1395b66b3f3728d11c',
			'count': 30,
			'callback': 'JSON_CALLBACK'
		};

// INITIAL REQUEST
		function initImages() {

			$http({
				url: url,
				method: 'JSONP',
			 	params: config,
			})
			.success(function(results, data) {
				$scope.images = results.data;
				$scope.newUrl = results.pagination.next_url;
				console.log('newUrl is ' + $scope.newUrl);
			})
			.error(function() {
				alert("Request failed, try refreshing to see some dog.");
			});
		};


// MORE IMAGE FUNCTIONALITY

		//Empty array for new images to be pushed to
		$scope.newImages = [];

		//Executes when user nears end of page
		$scope.onScroll = function() {
			
			console.log('onScroll() executed');

			//REQUEST
			$http({
				url: $scope.newUrl,  
				method: 'JSONP',
		 		params: config,
		 	})
			.success(function(results, data) {
				console.log('load more request success');
				$scope.moreResults = results.data;
				pushMore();
				$scope.newUrl = results.pagination.next_url;
			})
			.error(function() {
				console.log("failed to load more images");
			});
		};

		//Executes when onScroll() successfully requests more images
		function pushMore() {
			console.log("pushMore() executed");
			for (i = 0; i < $scope.moreResults.length; i ++) {
				$scope.newImages.push($scope.moreResults[i]);
			}
			console.log("Current image array is " + $scope.newImages);
		};

	});



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af