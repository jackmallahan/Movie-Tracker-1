import React, { Component } from 'react'



class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: "",
			password: ""
		}
	}

	handleInput (type, e) {
		this.setState({
			[type]: e.target.value
		})
	}
	render() {
		console.log('props in login ', this.props)
		// console.log('hs ', handleSubmit);
		
		return (
			<div className="login-div">
				<input placeholder="Username" className="username-input" onChange={(e) => this.handleInput('user', e)} />
				<input placeholder="Password" className="password-input" onChange={(e) => this.handleInput('password', e)} />
				<input type="submit" onClick={() => this.props.handleSubmit(this.state)} />
			</div>
		)
	}
}

export default Login