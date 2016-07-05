angular.module('app').controller('NewProjectCtrl',function(
    $scope,
    projectService,
    $state,
    Upload,
    $timeout
){

    $scope.isCreating = false;
    $scope.isUploading = false;
    $scope.uploadData = {
        progress:0
    };

    $scope.project = {
        author:'',
        coverImage:null
    };

    $scope.authors = [
        {
            name:'Gorazd'
        },
        {
            name:'Matija'
        },
        {
            name:'Andrej'
        }
    ];
$scope.uploadFiles = function (file) {

       Upload.upload({
           url: 'http://localhost:3030/upload',
           data: {file: file}
       }).then(function (resp) {

           $scope.project.imageUrl = resp.data.filename;

       }, function (resp) {
           console.log('Error status: ' + resp.status);
       }, function (evt) {});

   };
 
    $scope.onCreateClick = function(){

        $scope.isCreating = true;

        $scope.project.author = $scope.project.author.name;

        projectService.create($scope.project)
            .then(function(res){

                $scope.isCreating = false;
                $state.go('projects');

            });

    };

});

