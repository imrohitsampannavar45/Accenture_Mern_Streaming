import "./props_Demo.css";

function Props_Demo(props) {
  return <h1 className="myName"> Welcome {props.yourName} ! </h1>;
}

export default Props_Demo;
