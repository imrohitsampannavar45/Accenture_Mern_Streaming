import express from 'express'
let blogserver = express()
import cors frpm
blogserver.use(cors({
  origin: 'http://localhost:3000'
}));
blogserver.get("/insertBlog", (req, res) => {
  let blogContent = req.query.txtDescription;
  let blogTitle = req.query.txtTitle;
  let blogCategory = req.query.txtCategory;
  res.send(`Your blog title ${blogTitle} is submitted`)
})
blogserver.listen(7002, () => console.log("Sever is running"))


