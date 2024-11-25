const { log } = require('console');
let fs =  require ('fs');

// //2 different - reading file 
// //synchronous 
// //blocks the code
// console.log("before Reading the Data Sync");
// let data = fs.readFileSync("sample.txt")
// console.log(data.toString())
// console.log("After async call and printing the Data");
// console.log("-------------------------------------------------------------------")




// //Asynchronous
// // Non - blocking code 
console.log("before reading the file async")
fs.readFile("sample.txt", (err,data) =>{
    if(err){
        console.log("Error While Reading the Data", err)
    }else{
        console.log("Data = ", data.toString())
        fs.writeFileSync("demo.txt", data.toString(),()=> {
            console.log("Completed");
    })
}
})



