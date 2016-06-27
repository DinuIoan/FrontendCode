hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function(a,b) {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.op1 = add(a,b);
        $scope.op2 = substract(a,b);
        $scope.op3 = multiply(a,b);
        $scope.op4 = divide(a,b);
//        TODO #13 refactor your calculations using MathService
    }

}]);
