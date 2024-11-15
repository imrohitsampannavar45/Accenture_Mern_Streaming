import Student from "./Student";
import "./Student.css";
function App() {
  return (
    <>
      <Student rollno={23} FirstName="Rohit" />
      <Student rollno={24} FirstName="Karthik" />
      <Student rollno={25} FirstName="Manju" />
      <Student rollno={26} FirstName="Sameer" />
      <Student rollno={27} FirstName="Sharma" />
    </>
  );
}

export default App;
