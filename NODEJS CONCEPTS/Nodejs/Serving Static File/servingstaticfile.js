let express = require('express')
let appserver = express()

let PORT = 3000;

// appserver.use("/terms", express.static("public"))
appserver.use("/home", express.static("public"))




//http:localhost:3000/terms/terms&conditions.txt


appserver.listen(PORT,()=> console.log(`server is ready to serve the static file at port no ${PORT}   `))