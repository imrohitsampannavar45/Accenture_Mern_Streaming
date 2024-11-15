import { React, useState } from "react";

function Student(props) {
  let [marks, setMarks] = useState(0);

  function Increasemarks() {
    setMarks(marks + 1);
    marks++;
    if (marks >= 100) {
      alert("maximum marks is 100 Please Enter within that marks");
      setMarks(0);
    }
  }

  return (
    <>
      <div className="box">
        <h1>Student Details</h1>

        <h3>Roll No: {props.rollno}</h3>
        <h3>First Name: {props.FirstName}</h3>
        <h3>Marks: {marks}</h3>
        <button onClick={Increasemarks}>Increase</button>
      </div>
    </>
  );
}

export default Student;
