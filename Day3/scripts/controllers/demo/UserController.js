hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactory',
    function($scope, $http, $routeParams, $location,commonResourcesFactory) {

        $scope.employee = {};

        $scope.reset = function(firstName,lastName,email,phoneNumber,hireDate,jobId,salary,commissionPct,departamentId,manager) {
            var firstName = document.getElementById(firstName);
            var lastName = document.getElementById(lastName);
            var email = document.getElementById(email);
            var phoneNumber = document.getElementById(phoneNumber);
            var hireDate = document.getElementById(hireDate);
            var jobId = document.getElementById(jobId);
            var salary = document.getElementById(salary);
            var commissionPct = document.getElementById(commissionPct);
            var departamentId = document.getElementById(departamentId);
            var manager = document.getElementById(manager);
            firstName.setAttribute("for", id_from_input);
            firstName.innerHTML = "";
        };

        $scope.back = function() {
            // TODO back to Employee List page
            $location.path("/");

        };

        $scope.save = function(firstName,lastName,email,phoneNumber,hireDate,jobId,salary,commissionPct,departamentId,manager){
            
        };
        $scope.show = function(){
            
        };
        
    }]);