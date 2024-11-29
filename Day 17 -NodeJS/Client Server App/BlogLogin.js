const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const MongoClient = mongodb.MongoClient;

let blogserver = express();

const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5500'];

blogserver.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

blogserver.use(bodyParser.urlencoded({ extended: false }));

blogserver.post("/login", (req, res) => {
    let id = req.body.id;
    let pass = req.body.pass;

    MongoClient.connect("mongodb://127.0.0.1:27017")
        .then((client) => {
            let db = client.db("Logins");
            let coll = db.collection("Users");

            coll.findOne({ "username": id })
                .then(user => {
                    if (!user) {
                        res.send("login failed");
                        return;
                    }

                    // Compare the hashed password
                    bcrypt.compare(pass, user.password, (err, result) => {
                        if (err) {
                            res.send("login failed");
                        } else if (result) {
                            res.send("login successful");
                        } else {
                            res.send("login failed");
                        }
                    });
                })
                .catch(err => {
                    console.error("Error finding user:", err);
                    res.send("couldn't login due to error");
                });
        })
        .catch(err => {
            console.error("Error while connecting to database:", err);
            res.send("couldn't login due to error");
        });



    blogserver.post("/register", (req, res) => {
        let id = req.body.id;
        let pass = req.body.pass;

        // Hash the password before storing it
        bcrypt.hash(pass, 10, (err, hashedPassword) => {
            if (err) {
                res.send("error hashing password");
                return;
            }

            MongoClient.connect("mongodb://127.0.0.1:27017")
                .then((client) => {
                    let db = client.db("Logins");
                    let coll = db.collection("Users");

                    coll.insertOne({ "username": id, "password": hashedPassword })
                        .then(result => {
                            res.send("user registered successfully");
                        })
                        .catch(err => {
                            console.error("Error inserting user:", err);
                            res.send("error registering user");
                        });
                })
                .catch(err => {
                    console.error("Error while connecting to database:", err);
                    res.send("error connecting to database");
                });
        });
    });

});

blogserver.listen(7002, () => console.log("Server is running on port 7002"));
