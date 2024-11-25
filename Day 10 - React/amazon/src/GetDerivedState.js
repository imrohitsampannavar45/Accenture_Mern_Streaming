import React from "react";

class GetDerivedState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouriateColor: "red" };
  }

  render() {
    return (
      <>
        <h1>Get Derived State From Props Example</h1>
        <h2>faviouriate Color is {this.state.favouriateColor}</h2>
      </>
    );
  }

  static getDerivedStateFromProps(props) {
    return { favouriateColor: props.fcolor };
  }
}
export default GetDerivedState;
