// function fullname(firstname, lastname, middlename= "-"){
//     return firstname+ " "+middlename+" "+lastname
// }
// console.log(fullname("Sachin", "Tendulkar"))
// console.log(fullname("Rohit","Vittal", "Sampannavar"))



let firstname = "sachin"
let lastname = "tendulkar"

let username = firstname||lastname||'Guest'
console.log("welcome " +username)



let fullname = firstname&&lastname&&firstname+ " "+lastname
console.log(fullname)


// ternary operator

let a = 10;
let b = 10;    


let msg = a>b ? "a is greater" : "b is greater"
console.log(msg)
console.log(a===b&&"a & b are equal")

// used for Conditional Rendering in React 
