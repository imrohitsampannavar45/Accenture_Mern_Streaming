// class Human{


//     constructor(fname, laname, a){
//         this.firstname = fname
//         this.lastname = laname
//         this.age = a

//     }


//     fullname=()=>{
//         return this.firstname+ " "+this.lastname
//     }
// }

// let h1 = new Human("sachin", "tendulkar", 50)
// console.log(h1.fullname());
// let h2 = new Human("virat", "kohli", 40)
// console.log(h2.fullname())


// class Employee extends Human{
// constructor(fname, lname, a, id, sal,exp){
//     super(fname,lname,a)
//     this.eid = id
//     this.salary = sal
//     this.experience = exp
// }

// }

// let e1 = new Employee("Dhoni", " MS", 45, 123,500000,5)
// console.log(e1);


// employeeDetails = ()=>{
//     return `I am  ${this.fname} having ${this.experience} 
//     years of expwith salary of ${this.salary}`
// }

// console.log(e1. employeeDetails());



class Human{
   
    constructor(fname,lname,a){
       this.first_name=fname
       this.lastname=lname
       this.age=a
    }
 
    fullname=function(){
        return this.first_name+" "+this.lastname
    }
 
}
 
let h1=new Human("sachin","Tendulkar",50)
console.log(h1.fullname())
let h2=new Human("virat","kholi",40)
console.log(h2.fullname())
 
 
class Employee extends Human{
    constructor(fname,lname,a,id,sal,exp)
    {
        super(fname,lname,a)
        this.eid=id
        this.salary=sal
        this.experience=exp
    }
 
    employeeDetails=()=>{
        return `I am ${this.fullname()} having ${this.experience}
        years of exp with salry of ${this.salary} rs`
    }
 
}
 
class Customer extends Human{
 
}
 
let e1=new Employee("Dhoni","MS",45,123,50000,5)
console.log(e1.employeeDetails())
 