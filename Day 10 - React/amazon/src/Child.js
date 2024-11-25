import React from "react";
import { ReactDOM } from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("the component named Hello world is about to be unmounted");
  }
  render() {
    return <h2>Hello World from Child component</h2>;
  }
}
export default Child;
