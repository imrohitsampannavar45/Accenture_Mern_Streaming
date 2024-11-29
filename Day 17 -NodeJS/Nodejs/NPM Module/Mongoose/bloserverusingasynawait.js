let express = require("express");
let blogserver = express();
let mongoose = require("mongoose");
let schema = mongoose.Schema;
let blogSchema = new schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
});
blogserver.get("/insertBlog", async (req, res) => {
    let blogContent = req.query.txtDescription;
    let blogTitle = req.query.txtTitle;
    let blogCategory = req.query.txtCategory;
    let blogDoc = {
        category: blogCategory,
        title: blogTitle,
        description: blogContent,
    };

    //write db code - to insert into the db

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ShiftLeft1");
        let blogmodel = mongoose.model("blogs", blogSchema);
        let doc = new blogmodel(blogDoc);
        await doc.save();

        console.log("successfully inserted");
        res.send(`Your blog under the title ${blogTitle} is submitted`);
    } catch (err) {
        res.send("Unable to add blog to the website");
        console.log("Error=", err);
    }

    //fetch the data from db
});

blogserver.listen(7004, () => {
    console.log("blog server is running");
});

