import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="App">
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h1>Course ID : {course.ccode}</h1>
            <h2>Course Name : {course.cname}</h2>
            <h3>Course Fees : {course.cfees} </h3>
            <p>Student Name :  {course.sname}  - Enrolled </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
