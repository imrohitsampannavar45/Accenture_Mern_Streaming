import React from "react";

class State_Demo extends React.Component {
  constructor() {
    super();
    this.state = { Person_Id: 100000111 };
  }

  changePersonID = () => {
    this.setState({
      Person_Id: (this.state.Person_Id = 600000000),
    });
  };

  render() {
    return (
      <>
        <h1>State Demo</h1>
        <p>Old ID :{this.state.Person_Id}</p>
        <button onClick={this.changePersonID}>New ID:</button>
      </>
    );
  }
}
export default State_Demo;
