hrApp.controller('ColorsController',['$scope',function($scope){
    $scope.colors = [
        {
            text : "muted",
            class: "text-muted"
        },
        {
            text : "primary",
            class: "text-primary"
        },
        {
            text : "success",
            class: "text-success"
        },
        {
            text : "info",
            class: "text-info"
        },
        {
            text : "warning",
            class: "text-warning"
        },
        {
            text : "danger",
            class: "text-danger"
        }
    ];
    $scope.changeColor = function(){
        $scope.classColor = $scope.color.class;
    }
}]);

