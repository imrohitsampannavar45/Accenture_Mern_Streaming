import { ReactDOM } from "react";
import React from "react";
class ShouldComponentUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouriateColor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ favouriateColor: "green" });
  };

  render() {
    return (
      <>
        <h1>Should Component Update Demo</h1>
        <h2>favouriateColor is {this.state.favouriateColor}</h2>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </>
    );
  }
}
export default ShouldComponentUpdates;
