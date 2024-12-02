const blogmodel = require('../model/blogmodel');

const blogController = (req, res, next) => {
    const blogContent = req.query.txtDescription;
    const blogTitle = req.query.txtTitle;
    const blogCategory = req.query.txtCategory;

    const blogDoc = {
        category: blogCategory,
        title: blogTitle,
        description: blogContent,
    };

    const doc = new blogmodel(blogDoc);
    doc.save()
        .then(insertobj => {
            console.log("Successfully Inserted");
            res.send(`Your blog under the title ${blogTitle} is submitted successfully`);
        })
        .catch(inserterr => {
            res.send("Unable to add blog to the website");
            console.log("Problem while inserting the blog, Error: ", inserterr);
        });
};




module.exports = { blogController };
