hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllDepartments: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl )
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                           error: "Eroare"
                        };
                    });
            }
        }
    }]
);