angular.module('template', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope) {

// TEST CODE DELETE ME
		$scope.reset = function() {
			$scope.test = "new text";
		};
		
	}]);
