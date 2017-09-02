import React, { Component } from 'react'
import MovieCardContainer from '../MovieCard/MovieCard'

class Favorites extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getAllFavorites(this.props.user.id)
	}

	render() {
		const mappedFaves = this.props.faves ? this.props.faves.map(movie => <div>{movie.title}</div>) : null
		const noFaves = () => <div className="favorites-container">Sweet Action</div>

		return <div>{this.props.faves !== [] ? mappedFaves : noFaves}</div>
	}
}

export default Favorites
