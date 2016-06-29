hrApp.service('Employee2Service', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllEmployee: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    })
                    
            }
        }
    }]
);