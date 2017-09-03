import React, { Component } from "react";
import { Redirect } from "react-router";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    // this will redirect user when they register successfully
    if (this.props.user.id) {
      return <Redirect to="/" />;
    }

    return (
      <div className="register-div">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit({
              name: this.state.name,
              email: this.state.email.toLowerCase(),
              password: this.state.password
            });

            {
              /* this will sign user in when they hit the register button */
            }

            this.props.signIn({
              email: this.state.email.toLowerCase(),
              password: this.state.password
            });

            {
              /* this will give a re-render to check if statement at top of render() */
            }
            this.setState({
              name: "",
              email: "",
              password: ""
            });
          }}
        >
          <input
            placeholder="Name"
            className="name-input"
            onChange={e => this.handleInput("name", e.target.value)}
          />
          <input
            placeholder="Email"
            className="email-input"
            onChange={e => this.handleInput("email", e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="password-input"
            onChange={e => this.handleInput("password", e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
