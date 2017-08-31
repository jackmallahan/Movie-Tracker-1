import React, { Component } from 'react'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}

	handleInput(type, input) {
		this.setState({
			[type]: input
		})
  }
  
  componentDidMount() {
    this.props.loadUsers();
  }

	render() {
		return (
			<div className="login-div">
				<form
					onSubmit={e => {
						e.preventDefault()
						this.props.handleSubmit({
							email: this.state.email.toLowerCase(),
							password: this.state.password
						})
					}}
				>
					<input
						placeholder="Email"
						className="email-input"
						onChange={e => this.handleInput('email', e.target.value)}
					/>

					<input
						placeholder="Password"
						type="password"
						className="password-input"
						onChange={e => this.handleInput('password', e.target.value)}
					/>

					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default Login
