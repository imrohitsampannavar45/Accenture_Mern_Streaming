// model/blogmodel.js
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
});

const blogmodel = mongoose.model("blogs", blogSchema);
module.exports = blogmodel;
