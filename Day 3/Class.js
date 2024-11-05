class Employee{
    empno;
    empname;
    age;
    salary;
constructor(){
    this.empno = 0;
    this.empname = "",
    this.age = 0;
    this.salary = 0.0;
}
    DisplayEmployee(){
        console.log("Employee no"+ this.empno);
        console.log("Employee Name" + this.empname);
        console.log("Employee Age"+ this.age);
        console.log("The Salary is ", this.salary);
    }
}


var emp1 = new Employee();
emp1.DisplayEmployee();
emp1.empno = 2222;
emp1.empname = "Accenture";
emp1.age = 33;
emp1.salary = 456.77
emp1.DisplayEmployee();