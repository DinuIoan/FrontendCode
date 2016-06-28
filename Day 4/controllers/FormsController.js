hrApp.controller('FormsController',['$scope',function($scope){
    $scope.press = function(valid)
    {
        if(valid == true)
            alert("Este valid");
    }
}]);