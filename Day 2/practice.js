function greetings () {
    console.log("Hello Good Morning");
    console.log("hello Good Afternoon");
    console.log("Hello good Evening");
    
}
greetings();


//function with parameters
function add(a,b){
return a+b;
}
console.log(add(1,4));

function sub(a,b){
    return a-b;
}

console.log(sub(5,1));

function mul(a,b){
    return a*b;
}
console.log(mul(3,4));

function div(a,b){
    return a/b;
}
console.log(div(3,4));
// ========================================

var divisionFunction = function div(a,b){
    return a/b;
}
console.log(divisionFunction(33,2));

// ==========================================


var multiplication = () =>{
console.log("hello World From Arrow Function")
}
multiplication()

// =========================================

var multiplicationFunction = (a,b) => {
console.log("Hello World");
return a+b;

}


console.log(multiplicationFunction(2,5));