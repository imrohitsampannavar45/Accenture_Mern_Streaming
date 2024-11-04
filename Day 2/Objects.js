// //Pre Define Objects

// var todaysDate = new Date();
// console.log(todaysDate.getFullYear());



// var num = Math.random()
// console.log(num)

// var num1= Math.floor(44.66);
// console.log(num1);

// var num2 = Math.PI
// console.log(num2);


//user Defined Objects
//object literals

// var products = {

//     name: "mobile phone",
//     color:"black",
//     price : 45000,
//     getProductDetails(){
//     return "The Product is " + this.name + this.price + this.color 
//     }
// }


// console.log('====================================');
// console.log(products.name, products.price, products.color);
// console.log('====================================');
// console.log('====================================');
// console.log(products.getProductDetails());
// console.log('====================================');




// var products = {
//     name: "Iphone 16 Pro",
//     price: 80000,
//     color:"Black",
//     manufacturer: "Apple Inc",
//     getModelDetails(){
//         return "This Phone is Manufactured By " +this.manufacturer+ "And the Name of the Mobile is "+ this.name
//         + "And the Price of the Iphone is "+ this.price +"and the color is " + this.color 
//     }
// }

// console.log(products.name);
// console.log(products.price);
// console.log(products.manufacturer)
// console.log(products.getModelDetails());


//object Constructor 


// var product  =  new Object();

// product.name = "Iphone",
// product.model = "15 Pro Max",
// product.color = "Black",
// product.price = 58522;

// product.getProductDetails = function (){
//     return `The Prouct is ${this.name} and price is ${this.price}`
// }

// console.log(product.getProductDetails())



// var Profile = new Object();

// Profile.name = "Rohit Sampannavar"
// Profile.education = "BE CSE",
// Profile.place = "Bengaluru",
// Profile.dob = 2001

// Profile.getDetails = function (){
//     return  ` The Profile name is ${this.name} and completed graduation in ${this.education}`
// }

// console.log(Profile.name);
// console.log(Profile.dob);
// console.log(Profile.getDetails())




//constructor function


// function product(name, color, price) {
//     this.pname = name;
//     this.prodprice = price;
//     this.pcolor = color;
// this.getProductDetails = function(){
//     return "My Mobile Phone is "+ this.pname;
// }

// }

// var product1 = new product("Iphone", "Black", 12000)
// var products = new product("Washing Machine ", "pink", 9000000);
// console.log(product1.getProductDetails());
// console.log(products.getProductDetails())




// function resume(name, education, experience){
//     this.name = name;
//     this.education = education;
//     this.experience = experience;
//     this.getResume = function(){
//         return "My Name is " + this.name + " "+ "Completed Education in" + 
//          " " + this.education + " "+  " and having a expeience of " 
//         + this.experience
//     }
// }

// var demo = new resume("Rohit", "BCA", "2 Year of Experience");
// console.log(demo.getResume())


// //100 lines of code 

// resume.prototype.getResumeDetails = function(){
//     return "This is my Resume" + " " +this.name
// }
// console.log(demo.getResumeDetails())

// resume.prototype.getExperience = function(){
//     return "This candidate has this much of experience"+ " " + this.experience;

// }
// console.log(demo.getExperience())




//prototype inheritance 

// function Person(name,location,years){
// this.name = name;
// this.location = location;
// this.years = years;


// function getPersonDetails(){
//     return "this person name is " + this.name
// }
// }

// Person.prototype.welcome = function(){
//     console.log("Deepika Welcome");
// }



// function vehicle (name, color, model){
//     this.name = "maruti";
//     this.color = "Blue";
//     this.model = "New Model"
// }

// vehicle.prototype.speed = function(){
//     console.log("This Vehicle Runs at High Speed");
// }

// vehicle.prototype.engine = function(){
//     console.log(" this Vehicle Engine is Very Good");
// }



// function car(){

//     this.car = new vehicle()
    
//     car.prototype.modelName = function(){
//         console.log("The Car Model Name is Maruti Suzuki");
//     }

// }

// console.log(car.engine())











// function Student(){
// Student.prototype = new Person()


// Student.prototype.study = function (){
// console.log(" I am Studying");s

// }
// }

// var StudentInfo = new Student();
// StudentInfo.study()
// StudentInfo.welcome();





function Vehical(){}

Vehical.prototype.name = 'tata'
Vehical.prototype.model = 'Nano'
Vehical.prototype.details = function(){
    console.log(`the name is ${this.name} and brand is ${this.model}`)
}

function Car(){}
Car.prototype = new Vehical();

Car.prototype.price = 250000;
Car.prototype.details = function(){
    console.log(`the price is ${this.price}`)
}

let CarObj = new car();
CarObj.details();
console.log(CarObj.name)
CarObj.details()

let VehicalObj = new Vehical()
VehicalObj.details()

//output
//  node script.js
// the name is vehical and brand is suzuki
// suzuki
// the price is 250000
// the name is vehical and brand is suzuki