angular.module('app').controller('EditProjectCtrl',function(
	$scope,
	projectService,
	 $state
	
	){
	
	
	
		$scope.project = {
		author:''
			
	};			
	
		
	
		$scope.authors = [
		
		{
			name:'Marjan'
		},
		{
			name:'Peter'
		},
		{
			name:'Zoran'
		}
	];
	
	
	
	$scope.project = projectService.model.item;
	
	console.log($scope.project);
	
	$scope.saveClick = function(){
		$scope.project.author = $scope.project.author.name;
		projectService.update($scope.project._id, $scope.project)
		.then(function(res){
			
			$state.go('projects');
		});
		
	};
});

	
	
	
