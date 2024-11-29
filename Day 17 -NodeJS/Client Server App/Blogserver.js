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

// Start the server
blogserver.listen(3000, () => console.log(`Server is running on port `));