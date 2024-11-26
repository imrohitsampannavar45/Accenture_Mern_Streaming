// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/home", (req, res) => {
//     res.json({
//         message: "Hello World"
//     });
// });


// app.post("/login", (req,res)=>{
//     res.json({
//         username:req.body,
//         password:req.body,
//        message:"Your Details Submitted Successfully"
//     })
    
// })

// app.listen(3000, () => {
//     console.log("Server is running on localhost:3000");
// });



// let express = require(express);

// let appserver = express()

// let port = 4000;

// appserver.get("/", (req,res)=>{
//     res.send("<h1>Hello World </h1>")
// })

// appserver.listen(port, ()=>{
//     console.log("Hurray Your Server Started at LocalHost: " + port)
// });



let express = require("express")
let app = express()


let username = "Rohit Sampannavar";

app.get("/" , (req,res) =>{
    res.send(`Hello ${username}`);
})

app.listen(3000, ()=>{
    console.log("Server Started at 3000");
})