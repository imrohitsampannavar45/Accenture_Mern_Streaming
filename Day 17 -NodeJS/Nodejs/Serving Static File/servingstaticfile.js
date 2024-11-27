let express = require('express')
let appserver = express()

appserver.use("/terms", express.static("public"))
// appserver.use("/index", express.static("public"))
//http:localhost:3000/terms/terms&conditions.txt


appserver.listen(3000,()=> console.log("server is ready to serve the static file "))