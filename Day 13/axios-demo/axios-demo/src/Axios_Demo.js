import axios from 'axios';
import React from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Added https to the URL

class Axios_Demo extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url)
      .then(response => response.data)
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div>
        <h1>React Axios Demo</h1>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.website}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Axios_Demo;
