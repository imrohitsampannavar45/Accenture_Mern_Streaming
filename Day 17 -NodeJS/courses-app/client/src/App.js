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
      <table border="2" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Course Fees</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.ccode}</td>
              <td>{course.cname}</td>
              <td>{course.cfees}</td>
              <td>{course.sname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
