//singleton - at any point of time there would be only one object

var emp = {
    empno:1001,
    empname:"Sudha",
    displayDetails:function(){
            dispDetails = "Employee no = " + this.empno + "    Emp Name = "+ this.empname
            return dispDetails
    }
}

console.log(emp.displayDetails())



var vehicle = {
    vehicle_no: "KA 28 V 1898",
    vehicle_name: "Karnataka Vehicle",
    showDetails:function(){
        show= "Vehicle Name = "+this.vehicle_name + " Vehicle No = "+ this.vehicle_no
        return show
    }
}
console.log(vehicle.showDetails())


const student = {
    student_name: "Rohit Sampannavar",
    student_no : 8431455095,
    studentDetails:function(){
showStudentDetails= "Student Name is =   "  +this.student_name + " "+ "Student Mobile No is  = " + this.student_no ;
return showStudentDetails;
    }
}
console.log(student.studentDetails())