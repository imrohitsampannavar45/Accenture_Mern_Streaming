// before  we had 



// function display () {

// var msg = "Good Morning"

// if(true){
//     var msg = "Hello"
//     console.log(msg);
// }

// console.log("outside block ----------")
// console.log(msg);

// }


// display()






// var = function scope - redeclare - reassign 
// let = block scope - no redeclare - reassign
// const = block scope -no redeclare - no reassign 












/*
var=function scope-redeclare-reassign
let=block scope-no redeclare-reassign
const=block scope-no redeclare-no reassign

*/

let globalmsg="Welcome to the session!!"


function display()
{
    var msg="Good morning"
    let letmsg="Good morning"
    const country="india"

    if(true)
    {
        var msg="Hello"
        var msg="Hi"//redecalre
        msg="Good evening"//reassign

         let letmsg="Hello"
         //let letmsg="Hi"//no redeclare//error
         letmsg="Good evening"

        const country="INDIA"
        //const country="usa"//no redeclare//error
        country="usa"//no reassign//error

        //gbl_msg="This is highly restricted"
    
        console.log(msg)
        console.log(letmsg)
        console.log(country)
    }
    console.log("-------------------outside block-----------------")
    console.log(msg)
    console.log(letmsg)
    console.log(country)
}
display()
