let express = require("express");
let signinServer = express();
let mongodb = require('mongodb')
let mongoC = mongodb.MongoClient;


const cors = require('cors');  // Import the cors package
signinServer.use(cors());  // This will allow all domains to make requests to your server
signinServer.use(express.json());




let bp = require('body-parser')
signinServer.use(bp.urlencoded({ extended: false }))//qs library  querystring library
signinServer.post("/signin", (req, res) => {
    let username = req.body.email;
    let upassword = parseInt(req.body.password);


    mongoC.connect("mongodb://127.0.0.1:27017")
        .then((connObj) => {
            let collection = connObj.db('signinusers').collection("userData");


            console.log(username, upassword)
            collection.findOne({ email: username, password: upassword })
                .then((document) => {
                    if (document) {
                        res.send(`<h1>Welcome, ${document.email}!</h1>`);
                    } else {
                        res.send(`<h1>User Not Found</h1>`);
                    }
                })
                .catch((err) => {
                    // Handle any errors that occur
                    res.send(`<h1>Error while querying the database</h1>`);
                    console.log("Error:", err);
                });
        })
        .catch((connErr) => {
            res.send("Server Error")
            console.log("Problem with connection Establishment", connErr)


        })
        .finally(() => {
            console.log("Connection Closed")
        })



});


signinServer.listen(7004, () => {
    console.log("Sigin server is running");
});