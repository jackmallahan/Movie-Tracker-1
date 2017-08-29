import React, { Component } from 'react'
import { fetchNowPlaying } from '../../utils/fetchHelper'
import key from '../../utils/APIkey'

const Login = () => {
	return (
		<div className="login-div">
			<input placeholder="Username" className="username-input" />
			<input placeholder="Password" className="password-input" />
			<input type="submit" onClick={() => fetchNowPlaying()} />
		</div>
	)
}

export default Login
