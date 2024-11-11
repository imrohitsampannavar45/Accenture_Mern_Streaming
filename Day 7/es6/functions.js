// function sayHello() {
//     console.log("Hello");
// }

// sayHello()    =>  Function Statement



// function echo(msg)
// {
//     console.log(msg)
// }

// echo("hello")
// echo("hi")


// function add(n1,n2){
//     return n1+n2 // 10 + undefined => NaN
//                 //  undefined + undefined = > NaN   
// }

// console.log(add(10,20));
// console.log(add(10,"20"))
// console.log(add(10))
// console.log(add())



//function expression

// let sub = function(n1,n2){
//     return n1-n2
// }


// let mul = function(n1,n2){
//     return n1*n2
// }

// console.log(typeof sub)

// console.log(sub(10,20))


// function calculate(num1, num2,opertor) // higher order function
//  {
//    console.log( opertor(num1,num2))

// }

// calculate(10,20,sub) // sub is a callback
// calculate(10,20,mul) // mul is a callback
// calculate(10,20,function(n1,n2){return n1* n2})
// calculate(10,20,function(n1,n2){return n1 / n2})



// let div = function (n1, n2) {
//     return n1/n2
// }

// let mod = function (num1,num2){
//     return num1%num2
// }

// function calculate(num1,num2,oper){
//  console.log(oper(22,44));

// }

// calculate(10,20,div);
// calculate(10,20,mod)


// Arrow Functions
const add =(a,b) =>{
    return a+b;
}
console.log(add(4,5));