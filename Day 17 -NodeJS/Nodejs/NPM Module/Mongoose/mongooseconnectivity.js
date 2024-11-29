const express = require("express");
const bpr = require("body-parser");
let blogserver = express();
const cors = require("cors");
const mongoose = require("mongoose");
const schema = mongoose.Schema
let blogSchema = new schema({
    "content": String,
    "title": String,
    "category": String,
});
blogserver.use(
    cors({
        origin: "http://localhost:3000",
    })
);
blogserver.use(bpr.urlencoded({ extended: false }));
blogserver.get("/insertBlog", (req, res) => {
    let blogContent = req.query.txtDescription;
    let blogTitle = req.query.txtTitle;
    let blogCategory = req.query.txtCategory;
    let blogDoc = {
        "content": blogContent,
        "title": blogTitle,
        "category": blogCategory,
    };
    mongoose
        .connect("mongodb://127.0.0.1:27017/ShiftLeft1")
        .then((connObj) => {
            let blogmodel = mongoose.model("blogs", blogSchema);
            let doc = new blogmodel(blogDoc);
            doc
                .save()
                .then((doc) => { res.send("document inserted") })
                .catch((err) => {
                    res.send("server error");
                    console.log(err);
                })
                .finally(() => { });
        })
        .catch((err) => { console.log(err) })
        .finally(() => { });
});
blogserver.listen(7004, () => console.log("Server is running"));