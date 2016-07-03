angular.module('app').controller('HomeCtrl',function($scope){

	
	
	
		
		
		$scope.counter = 0;
	
    $scope.count = function () {
		
        $scope.counter =  $scope.counter +1;
	};
	
});