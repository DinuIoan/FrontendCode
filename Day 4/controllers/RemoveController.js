hrApp.controller('RemoveController',['$scope',function($scope) {
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
    
    $scope.remove = function(index){
       $scope.colors.splice(index);
    }
}]);