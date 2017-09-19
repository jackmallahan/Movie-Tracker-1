import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import MovieIndexContainer from '../MovieIndex/MovieIndexContainer.jsx'
import RegisterContainer from '../Register/RegisterContainer'

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

	render() {
		if (this.props.currentUser.id) {
			return <Redirect to="/" />
		}

		return (
			<div className="login-div">
				<h2 className="login-header">Log in to an existing account</h2>
				<form
					onSubmit={e => {
						e.preventDefault()
						this.props.handleSubmit({
							email: this.state.email.toLowerCase(),
							password: this.state.password
						})
						this.setState({
							email: '',
							password: ''
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

					<input
						className="login-button"
						type="submit"
						disabled={!this.state.email || !this.state.password ? true : false}
					/>
				</form>
			</div>
		)
	}
}

export default Login
