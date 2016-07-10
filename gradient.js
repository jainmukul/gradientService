var app = angular.module('gradientApp', []);

app.controller('mainCtrl', ['$scope','gradientService',function($scope,gradientService) {
	$scope.option = {
		color1 : '#c62828',
		color2 : '#fded86',
		midColor : '',
		// midColorPosition : .5, 
		n : 10,
		group : ""
	}


	$scope.GenerateColor = function(){
		if($scope.option.midColor === null || $scope.option.midColor === '' ){
			$scope.colorsHSV = gradientService.HSVGradient([
			  $scope.option.color1,
			  $scope.option.color2,
			],$scope.option.n);
			$scope.colorsRGB = gradientService.RGBGradient([
			  $scope.option.color1,
			  $scope.option.color2,
			],$scope.option.n);
		}
		else{
			$scope.colorsHSV = gradientService.HSVGradient([
			  $scope.option.color1,
			  $scope.option.midColor,
			  $scope.option.color2,
			],$scope.option.n);
			$scope.colorsRGB = gradientService.RGBGradient([
			  $scope.option.color1,
			  $scope.option.midColor,
			  $scope.option.color2,
			],$scope.option.n);	
		}
	}


// $scope.colors =  gradientService.HSVGradient([{color: 'red', pos: 0},
//   {color: 'blue', pos: 0.5},
//   {color: 'green', pos: 1}],20);

	$scope.getStyleRGB = function(i){
		return {'background' : $scope.colorsRGB[i]};
	}
	$scope.getStyleHSV = function(i){
		return {'background' : $scope.colorsHSV[i]};
	}

}]);
