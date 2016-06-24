hrApp.controller('DescriptionController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.title = 'Two Way binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.resetFirstVariable = function(val){
        $scope.firstVariable = val;
    };
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    };
}]);