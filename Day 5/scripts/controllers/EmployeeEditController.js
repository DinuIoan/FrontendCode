hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','Employee2Service','DepartmentService','JobService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,Employee2Service,DepartmentService,JobService,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;
        $scope.managersList = [];
        $scope.departamentsList = [];
        $scope.jobsList = [];
        $scope.EmployeeId =null;

        DepartmentService.findAllDepartments()
            .then(function (res) {
                $scope.departamentsList = res.data;
            });
        JobService.findAllJobs()
            .then(function (res) {
                $scope.jobsList = res.data;
            });
        Employee2Service.findAllEmployee()
            .then(function (res) {
                $scope.managersList = res.data;
            });
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;

            })
    }]);