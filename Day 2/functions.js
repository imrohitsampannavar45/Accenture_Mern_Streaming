// Functions - Block of Code - Performs Specific Task 

// In Js, we can create function ina 3 Different ways 

// 1. Function Statement 

// function sayHello(){
//     console.log("Hello This is a Function Statement");
    
// }

// sayHello();
// sayHello();
// sayHello();




// Function with Parameters
// function product(a,b){
//     return a*b;

// }

// console.log(product(5,10));
// console.log(product(25,10));




//2. Function Expression
// Expression - Combination of operation and operands
//a = b + c

// Function without name - Anonymous Function
// var productOfTwoNumbers = function product(a,b){
// return a*b;
// }

// console.log(productOfTwoNumbers(2,3));




// 3. Arrow Functions  - 2015 
//Reducing the Code

// Syntax - () => {}

    //single line of code  - remove the function keyword , curly braces , remove return keyword

var sayHi = () => console.log("Hello");

sayHi()




var prod = (a,b) =>a + b;

console.log(prod(55,5));

var productofTwoNumbers = (a,b) => {
    console.log("Hi this is an Arrrow Functions - Multiple Lines");
    return a *b ;
    
}
console.log(productofTwoNumbers(2,5));