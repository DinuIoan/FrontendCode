hrApp.service('UserService',function(firstName,lastName,email,phoneNumber,hireDate,jobId,salary,commissionPct,departamentId,manager){
    var newUser = [
        {
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            hireDate:"",
            jobId:"",
            salary:"",
            commissionPct:"",
            departamentId:"",
            manager:""
        }
    ];
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.phoneNumber = phoneNumber;
    newUser.hireDate - hireDate;
    newUser.jobId = jobId;
    newUser.salary = salary;
    newUser.commissionPct = commissionPct;
    newUser.departamentId = departamentId;
    newUser.manager = manager;
    
});