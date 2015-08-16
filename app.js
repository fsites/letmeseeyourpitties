angular.module('instagramApp', [])
	.controller('MyCtrl', function($scope, $http) {

		//Executes on Submit click
		$scope.onSubmit = function() {

			var url = 'https://api.instagram.com/v1/tags/' + $scope.userInput + '/media/recent';

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

				//MAKE IF ELSE STATEMENT, IF RESULTS = 0, GIVE FEEDBACK
				$scope.displayText = $scope.userInput;
				$scope.images = result.data;
				$scope.numRes = $scope.images.length;
				$scope.feedback = true;
				$scope.userInput = "";
				console.log($scope.numRes);
			})
			.error(function() {
				$scope.errorMessage = true;
				console.log("request failed");
			});

		};

	});



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af