import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.processForm(user);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  renderErrors() {
    if (this.props.errors && this.props.errors.length !== 0) {
      const errorStr = this.props.errors.join(", ");
      return (
        <p>{errorStr}</p>
      );
    }
  }

  render() {
    const headerText = ( this.props.formtype === "signup" ? "Sign Up" : "Log In");
    const altRegistrationLink = ( this.props.formtype === "signup" ? "/login" : "/signup");
    const altRegistrationText = ( this.props.formtype === "signup" ? "Log In" : "Sign Up");

    return (
      <div>
        <h3>{headerText} Form</h3>
        <Link to={altRegistrationLink}>Click Here To {altRegistrationText}</Link>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleChange} />
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange} />
          </label>

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
