function Employee() {
    this.empno;
    this. empname;
    this.age;
    this.salary;
this.DisplayEmployee = function(){
        console.log("Employee No : ", this.empno)
        console.log("Employee Name :",this.empname )
        
        
        
    }
}


var emp1 = new Employee();   //object of Type Employee is Created
emp1.empno = 2222;
emp1.empname = "Accenture";
emp1.age = 33;
emp1.salary = 356.77;
emp1.DisplayEmployee();


