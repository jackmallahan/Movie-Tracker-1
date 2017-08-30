import React, { Component } from 'react'
import LoginContainer from '../Login/Login.Container.jsx'
import MovieIndexContainer from '../MovieIndex/MovieIndexContainer.jsx'
import { getNowPlaying } from '../../actions/actions'

export default class App extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="app-container">
				<h1>Movie Tracker</h1>

				<LoginContainer />
				<MovieIndexContainer />
			</div>
		)
	}
}
