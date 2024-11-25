class Person extends React.Component {
  constructor() {
    super();
    this.state = { Name: "Rohit" };
  }

  changeName = () => {
    this.setState({
      Name: (this.state.Name = "Sampannavar"),
    });
  };
}
