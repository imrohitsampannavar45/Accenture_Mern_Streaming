import React from "react";

class UnControlledForm extends React.Component {
  constructor() {
    super();
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }
  updateSubmit(event) {
    alert("input submitted Successfully");
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form Demo</h1>
        <label>
          Name: <input type="text" ref={this.input} />
        </label>

        <label>
          <input type="submit" value="Submit"></input>
        </label>
      </form>
    );
  }
}

export default UnControlledForm;
