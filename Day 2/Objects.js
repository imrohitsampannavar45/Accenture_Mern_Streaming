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