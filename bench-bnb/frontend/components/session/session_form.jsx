import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick(e) {
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

  render() {
    return (
      <form>
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
    );
  }
}

export default SessionForm;
