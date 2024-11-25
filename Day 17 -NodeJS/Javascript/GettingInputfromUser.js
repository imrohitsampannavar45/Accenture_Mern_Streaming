// let readline = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// var username = "Guest"
// readline.question("What is your name ? ", (value) => {
//     username = value;
//     console.log("Welcome" , username);
// })



let readline = require("readline").createInterface ({
    input:process.stdin,
    output:process.stdout
})

var name = "Guest"
readline.question("What is Your Name ? ", (value) => {
    username  = value;
    readline.question("What is Your Mobile Number ? ", (phone_no) =>{
        mobile_no = phone_no;
        console.log(username);
        console.log(mobile_no);
    })
})