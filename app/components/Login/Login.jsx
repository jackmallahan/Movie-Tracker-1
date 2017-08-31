import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleInput(type, input) {
    this.setState({
      [type]: input
    });
  }

  
  render() {

    return (
      <div className="login-div">
        <input
          placeholder="Email"
          className="email-input"
          onChange={e => this.handleInput("email", e.target.value.toLowerCase())}
        />
        <input
          placeholder="Password"
          type="password"
          className="password-input"
          onChange={e => this.handleInput("password", e.target.value)}
        />
        <input
          type="submit"
          onClick={() => this.props.handleSubmit(this.state)}
        />
      </div>
    );
  }
}

export default Login;
