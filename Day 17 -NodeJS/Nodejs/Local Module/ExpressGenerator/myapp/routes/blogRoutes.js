// routes/blogRoutes.js
const express = require('express');
const { blogController } = require('../controller/blogController');
const blogrouter = express.Router();

blogrouter.get('/insertBlog', blogController);

module.exports = blogrouter;
