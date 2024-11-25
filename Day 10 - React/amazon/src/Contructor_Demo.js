import React from "react";
import { ReactDOM } from "react";

class Constructor_Demo extends React.Component {
  constructor() {
    super();
    this.state = { favouriateColor: "Red" };
  }
  render() {
    return (
      <>
        <h1> Contructor and Render Method Demo</h1>
        <h2>Favouriate Color is {this.state.favouriateColor} </h2>
      </>
    );
  }
}
export default Constructor_Demo;
