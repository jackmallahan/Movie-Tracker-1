import React, { Component } from 'react'
// import { handleSubmit } from '../../container/index.js'


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: "",
			password: ""
		}

		console.log(props);
	}

	handleInput (type, e) {
		this.setState({
			[type]: e.target.value
		})
	}
	render() {
		// console.log('hs ', handleSubmit);
		
		return (
			<div className="login-div">
				<input placeholder="Username" className="username-input" onChange={(e) => this.handleInput('user', e)} />
				<input placeholder="Password" className="password-input" onChange={(e) => this.handleInput('password', e)} />
				<input type="submit" onChange={() => handleSubmit(this.state.user, this.state.password)} />
			</div>
		)
	}
}

export default Login