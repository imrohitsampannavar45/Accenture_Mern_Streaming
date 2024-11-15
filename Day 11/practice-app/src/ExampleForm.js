import React from "react";
import "./ExampleForm.css";
class ExampleForm extends React.Component {
  constructor() {
    super();
    this.state = { value: "Customer Name" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your Information submitted successfully");

    event.preventDefault();
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Customer Form</h1>

          <label>
            Customer Name:
            <br></br>
            <input
              className="inputs"
              type="text"
              value={this.value}
              onChange={this.handleChange}
              placeholder="Customer First name"
            />
          </label>
          <br></br>
          <label>
            Customer last Name:
            <br></br>
            <input
              className="inputs"
              type="text"
              value={this.value}
              onChange={this.handleChange}
              placeholder="Customer last name"
            />
          </label>
          <br></br>

          <label>
            Customer Phone:
            <br></br>
            <input
              className="inputs"
              type="tel"
              value={this.value}
              onChange={this.handleChange}
              placeholder="Phone"
            />
          </label>
          <br></br>
          <label>
            Country
            <br></br>
          </label>
          <select className="selects">
            <option value="Russia">Russia</option>
            <option value="India">India</option>
          </select>

          <br></br>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default ExampleForm;
