let express = require('express');
let router = express.Router();
let courseController = require('../controller/courseController');


router.post('/addCourse', courseController.addCourse);

module.exports = router;
