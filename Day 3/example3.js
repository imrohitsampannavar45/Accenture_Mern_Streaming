var Employee = function (empno , empname)
{
  this.empno=empno;
  this.empname=empname;
  this.DisplayEmployeeDetails =  function ()
  {
   return "Emp No = "+this.empno+ "\n" + "Emp Name = "+this.empname;
  };
};

var ASE = function (designation , relocationAllowance)
{
      this.designation=designation;
      this.relocationAllowance=relocationAllowance;
  this.DisplayASEDetails =  function ()
  {
   console.log("********** Employee Details **********************");
   console.log(ase.DisplayEmployeeDetails());  //Calling Parent Class Method from Child Class Method
   return "Designation = "+this.designation+ "\n" + "RelocationAllowance = "+this.relocationAllowance;
  };
};

var emp = new Employee(1231,"Accenture");            // Parent Object Created
ASE.prototype = emp;                                 // Parent-Child Relationship Created
var ase = new ASE("ASE",2500);                       // Child Class Object Created
//console.log(ase.DisplayEmployeeDetails());         // Calling Parent Class Method Using Child Class Object
console.log(ase.DisplayASEDetails());                // Calling Child Class Method Using Child Class Object
