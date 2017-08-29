import React, { Component } from 'react'

const Login = () => {
	return (
		<div className="login-div">
			<input placeholder="Username" className="username-input" />
			<input placeholder="Password" className="password-input" />
			<input type="submit" onClick={() => alert('you pushed the button')} />
		</div>
	)
}

export default Login
