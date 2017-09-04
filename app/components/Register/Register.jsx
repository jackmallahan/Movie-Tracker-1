import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
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
		if (this.props.users.id) {
			return <Redirect to="/" />
		}

		return (
			<div className="register-div">
				<form
					onSubmit={e => {
						e.preventDefault()
						this.props.handleSubmit({
							name: this.state.name,
							email: this.state.email.toLowerCase(),
							password: this.state.password
						})
						localStorage.setItem('currentUser', JSON.stringify(this.props.currentUser))
						this.props.signIn({
							email: this.state.email.toLowerCase(),
							password: this.state.password
						})
						this.setState({
							name: '',
							email: '',
							password: ''
						})
						this.props.resetFavorites([])
					}}
				>
					<input placeholder="Name" className="name-input" onChange={e => this.handleInput('name', e.target.value)} />
					<input
						placeholder="Email"
						className="email-input"
						type="email"
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

export default Register
