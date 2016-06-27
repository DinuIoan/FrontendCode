hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactory','$routeParams',
    function ($scope, $http, $location,commonResourcesFactory,$routeParams) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory
        $http.get(commonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            })



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
            
        };


    }]);