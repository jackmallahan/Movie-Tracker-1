import React, { Component } from 'react'
import LoginContainer from '../Login/loginContainer.jsx'
import MovieIndexContainer from '../MovieIndex/MovieIndexContainer.jsx'
import RegisterContainer from '../Register/RegisterContainer.jsx'
import { getNowPlaying } from '../../actions/actions'
import { Route, NavLink, Link } from 'react-router-dom'
import favoritesContainer from '../Favorites/favoritesContainer'

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	// componentDidMount() {
	// 	if (localStorage.length) {
	// 		let user = JSON.parse(localStorage.getItem('currentUser'))
	// 		this.props.getFromLocal(user)
	// 	}
	// }

	render() {
		return (
			<div className="app-container">
				<header className="page-header">
					<NavLink to="/login" className="login-link">
						Login
					</NavLink>
					<NavLink to="/" className="movies-link">
						Movies
					</NavLink>
					<NavLink to="/register" className="register-link">
						Register
					</NavLink>
					<NavLink to="/favorites" className="favorites-link">
						Favorites
					</NavLink>
					<p
						className="logout"
						onClick={() => {
							localStorage.clear()
							location.reload()
						}}
					>
						Logout
					</p>
				</header>
				<h1>Movie Tracker</h1>
				<Route exact path="/" component={MovieIndexContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/register" component={RegisterContainer} />
				<Route exact path="/favorites" component={favoritesContainer} />
			</div>
		)
	}
}
