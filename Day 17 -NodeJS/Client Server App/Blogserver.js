const express = require("express");
const bpr = require("body-parser");
let blogserver = express();
const cors = require("cors");
const mongodb = require("mongodb");
const mongoc = mongodb.MongoClient;
blogserver.use(cors());


blogserver.use(bpr.urlencoded({ extended: false }));
blogserver.get("/insertBlog", (req, res) => {
    let blogContent = req.query.txtDescription;
    let blogTitle = req.query.txtTitle;
    let blogCategory = req.query.txtCategory;
    let blogDoc = {
        content: blogContent,
        title: blogTitle,
        category: blogCategory,
    };
    mongoc
        .connect("mongodb://127.0.0.1:27017")
        .then((connObj) => {
            let coll = connObj.db("ShiftLeft1");
            coll
                .collection("blog")
                .insertOne(blogDoc)
                .then((result) => {
                    res.send(`Your blog title ${blogTitle} is submitted`);
                })
                .catch((err) => {
                    res.send("Error Inserting Blog", err);
                });
        })
        .catch((err) => {
            console.log("error while connecting", err);

        });
});
blogserver.post("/insertBlog", (req, res) => {
    let blogContent = req.body.txtDescription;
    let blogTitle = req.body.txtTitle;
    let blogCategory = req.body.txtCategory;
    res.send(`Your blog title ${blogTitle} is submitted`);
});
blogserver.post("/login", (req, res) => {
    let id = req.body.id;
    let pass = req.body.pass;
    console.log(id, pass);

    if (!id || !pass) {
        return res.status(400).send("ID and Password are required.");
    }

    // Insert the received data into the 'users' collection
    let userDoc = { id: parseInt(id), pass: pass };

    db.collection("users").insertOne(userDoc)
        .then(result => {
            res.send("User data saved and logged in successfully");
        })
        .catch(err => {
            console.error("Error during login and saving data", err);
            res.status(500).send("Error during login and saving data");
        });
});

// Start the server
blogserver.listen(7002, () => console.log(`Server is running on port `));