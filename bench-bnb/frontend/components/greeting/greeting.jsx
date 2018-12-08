import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.currentUser && this.props.currentUser.id) {
      return (
        <header>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </header>
      );
    } else {
      return (
        <header>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </header>
      );
    }

  }


}

export default Greeting;
