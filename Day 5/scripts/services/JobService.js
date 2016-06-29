hrApp.service('JobService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllJobs: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl )
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