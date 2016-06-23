var employeesList = [
    {
        firstname:  'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
    firstname: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
    firstname:  'Diana',
    lastName: 'Ross',
    phone: '0123456789',
    salary: 4500
    },
    {
    firstname:  'Mike',
    lastName: 'Bob',
    phone: '0123456789',
    salary: 4500
    },
    {
    firstname:  'Emily',
    lastName: 'Hudson',
    phone: '0123456789',
    salary: 4500
    }

];

function showList() {
    var myTable = '<table class="table table-striped" border="1" > <tr><th>First name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for (var i in employeesList) {
        var myButton = '<button onclick="vizualizare(' + i + ')"> Vizualizare </button>' ;

        myTable += '<tr><td>' + employeesList[i].firstname + '</td>' +
            '<td>' + employeesList[i].lastName + '</td>' +
            '<td>' + employeesList[i].phone + '</td>' +
            '<td>' + employeesList[i].salary + '</td>' +
            '<td>' + myButton + '</td>' +
            ' </tr> ';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    }

    function vizualizare(j) {
        var rand = employeesList[j]['firstname'] + ", " + employeesList[j]['lastName'] + ", " + employeesList[j]['phone'] + ", " + employeesList[j]['salary'];
        alert(rand);
    }


var Employee = function(firstName, lastName, phone, salary){
    this.firstname = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
    showList();

}

function salaryTotal(){
    var salary = 0;
    var myTable ='<table border="1"> <tr><th>Salary Total</tr></th>';
    console.log(employeesList);
    for (var i = 0; i < employeesList.length; i++) {
        salary += employeesList[i]['salary'];
    }

    myTable += '<tr><td>'+salary+'</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function deleteEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.pop(new Employee(firstName,lastName,phone,salary));
    showList();
}

