angular.module('instagramApp', ['infinite-scroll'])
	.controller('MyCtrl', function($scope, $http) {

		$scope.subStatus = 0;
		console.log("subStatus should be 0 and is " + $scope.subStatus);

		//Executes on Submit click
		$scope.onSubmit = function() {

			var url = 'https://api.instagram.com/v1/tags/' + 'pitbullsofinstagram' + '/media/recent';

			//PARAMETERS
			var config = {
				'client_id': 'fe58bbb1a5724d1395b66b3f3728d11c',
				'count': 30,
				'callback': 'JSON_CALLBACK'
			};

			// REQUEST
			$http({
				url: url,
				method: 'JSONP',
			 	params: config,
			})
			.success(function(result) {
				$scope.images = result.data;
				$scope.subStatus = 1;
				console.log("Request success, subStatus should be 1 and is " + $scope.subStatus);

			})
			.error(function() {
				console.log("request failed.");
			});
		};

		//Infinite scroll function, checks subStatus to see if onSubmit() has run
		$scope.onScroll = function() {
			if ($scope.subStatus = 1) {
				console.log("Auto scroll on, subStatus should be 1 and is " + $scope.subStatus)
			}
			else {
				console.log("Auto scroll is off, subStatus should be 0 and is " + $scope.subStatus);
			};
		}
	});



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af