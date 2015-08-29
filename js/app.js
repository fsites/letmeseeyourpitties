<<<<<<< HEAD
angular.module('instagramApp', ['infinite-scroll'])
	.controller('MyCtrl', function($scope, $http) {

		// PARAMETERS CONFIG
=======
angular.module('instagramApp', [])
	.controller('MyCtrl', function($scope, $http) {

	// PARAMETERS CONFIG
>>>>>>> master
		var url = 'https://api.instagram.com/v1/tags/pitbullsofinstagram/media/recent';
		var config = {
			'client_id': 'fe58bbb1a5724d1395b66b3f3728d11c',
			'count': 30,
			'callback': 'JSON_CALLBACK'
		};

<<<<<<< HEAD
		//loads initial images
		initImages();

		//Initial request function
		function initImages() {

			// INITIAL REQUEST
=======
	//Loads initial images
		initImages();

	//Button show status
		$scope.status = false;

	//Empty array for new images to be pushed to
		$scope.newImages = []; 



	// INITIAL REQUEST
		function initImages() {

>>>>>>> master
			$http({
				url: url,
				method: 'JSONP',
			 	params: config,
			})
			.success(function(results, data) {
				$scope.images = results.data;
<<<<<<< HEAD
				$scope.newUrl = results.pagination.next_url; //not working
=======
				$scope.newUrl = results.pagination.next_url;
				$scope.status = true;
>>>>>>> master
				console.log('newUrl is ' + $scope.newUrl);
			})
			.error(function() {
				alert("Request failed, try refreshing the page for more pitties.");
			});
		};

<<<<<<< HEAD
		//Executes when user nears end of page
		$scope.onScroll = function() {
			
			// HTTP REQUEST
=======
	//Executes on click, eventually will work as infinite scroll
		$scope.onScroll = function() {
			
			console.log('onScroll() executed');

			//REQUEST
>>>>>>> master
			$http({
				url: $scope.newUrl,  
				method: 'JSONP',
		 		params: config,
		 	})
<<<<<<< HEAD
			.success(function(results, data) { 
				$scope.newImages = results.data;
				$scope.newUrl = results.pagination.next_url;
				console.log("more results request success");
=======
			.success(function(results, data) {
				console.log('load more request success');
				$scope.moreResults = results.data;
				pushMore();
				$scope.newUrl = results.pagination.next_url;
>>>>>>> master
			})
			.error(function() {
				console.log("failed to load more images");
			});
		};

<<<<<<< HEAD
=======
	//Executes when onScroll() successfully requests more images
		function pushMore() {
			console.log("pushMore() executed");
			for (i = 0; i < $scope.moreResults.length; i ++) {
				$scope.newImages.push($scope.moreResults[i]);
			}
			console.log("Current newImages array is " + $scope.newImages);
		};

>>>>>>> master
	});



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af