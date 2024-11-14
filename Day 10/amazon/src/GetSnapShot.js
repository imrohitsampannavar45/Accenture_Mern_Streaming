import React from "react";

class GetSnapShot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "Green",
      previousColor: "",
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.favouriteColor;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== this.state.favouriteColor) {
      this.setState({ previousColor: snapshot });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouriteColor: "Blue" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Favourite Color: {this.state.favouriteColor}</h1>
        <h2>Previous Color: {this.state.previousColor}</h2>
      </div>
    );
  }
}

export default GetSnapShot;
