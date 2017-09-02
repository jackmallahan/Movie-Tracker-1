import React, { Component } from 'react'
import MovieCardContainer from '../MovieCard/MovieCardContainer.js'

class Favorites extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.getAllFavorites(this.props.user.id)
	}

	render() {
		console.log('faaaaves ', this.props.faves);
		
		let mappedFaves;

		if (this.props.faves[0]) {
			mappedFaves = this.props.faves.map(movie => <MovieCardContainer key={movie.id} movie={movie} />)
		} else {
			mappedFaves = <div className="sweet-action">Sweet Action</div>
		}

		return (
				<div className="faves-list">
					{mappedFaves}
			   	</div>
		)
	}
}

export default Favorites
