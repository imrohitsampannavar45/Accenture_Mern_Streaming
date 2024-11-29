const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ShiftLeft1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const courseSchema = new mongoose.Schema({
    cname: String,
    ccode: Number,
    cfees: Number,
    sname: String,
});

const Course = mongoose.model('Course', courseSchema, '2.Courses');


app.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.put('/courses/:ccode', async (req, res) => {
    try {
        const courseNumber = parseInt(req.params.ccode);
        const { cfees } = req.body;

        if (cfees === undefined) {
            return res.status(400).json({ message: 'New course fees not provided.' });
        }

        const updatedCourse = await Course.findOneAndUpdate(
            { ccode: courseNumber },
            { cfees: cfees },
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ message: `Course with number ${courseNumber} not found.` });
        }

        res.json({ message: 'Course fees updated successfully.', updatedCourse });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.delete('/courses/:ccode', async (req, res) => {
    try {
        const courseNumber = parseInt(req.params.ccode);

        const deletedCourse = await Course.findOneAndDelete({ ccode: courseNumber });

        if (!deletedCourse) {
            return res.status(404).json({ message: `Course with number ${courseNumber} not found.` });
        }

        res.json({ message: `Course with number ${courseNumber} deleted successfully.` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
