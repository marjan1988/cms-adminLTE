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
  /* $scope.uploadFiles = function(file){

        $scope.isUploading = true;

        Upload.upload({
            url:'http://localhost:3030/upload',
            data: { file:file }
        }).then(function (resp) {

            $scope.project.imageName = resp.data.filename;
				
            $timeout(function(){

                $scope.isUploading = false;

            },1000);

        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.uploadData.progress = progressPercentage;

            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });

    };*/

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

