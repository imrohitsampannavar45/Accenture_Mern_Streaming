// before  we had 



function display () {

var msg = "Good Morning"

if(true){
    var msg = "Hello"
    console.log(msg);
}

console.log("outside block ----------")
console.log(msg);

}


display()






// var = function scope - redeclare - reassign 
// let = block scope - no redeclare - reassign
// const = block scope -no redeclare - no reassign 