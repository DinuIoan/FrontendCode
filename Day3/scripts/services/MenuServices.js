hrApp.factory('employeeActionsService', function () {

   var menu =
        // TODO #11 - add menu items
        [{
            label: "Employee list",
            url: '#/employeeslist'
        },
            {
                label:"Add employee",
                url:"#/employeeadd"
            }
        ];
    return menu;

});