let Course = require('../models/course');

exports.addCourse = (req, res) => {
    const { title, description, duration } = req.body;


    if (!title || !description || !duration) {
        return res.status(400).json({ message: 'All fields are required' });
    }


    const newCourse = new Course({
        title,
        description,
        duration
    });


    newCourse.save()
        .then(course => {
            res.status(201).json({ message: 'Course added successfully', course });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Error adding course' });
        });
};
