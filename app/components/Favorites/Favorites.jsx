import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'

class Favorites extends Component {
	constructor(props) {
		super(props)
		// this.faves = this.props.faves !== [] ? this.props.faves.map(movie => <div key={movie.id}>{movie.title}</div>) : <div className="favorites-container">Sweet Action</div>
	}

	componentDidMount() {
		this.props.getAllFavorites(this.props.user.id)
	}

	render() {
		console.log('props faves ', this.props.faves);
		
		// let mappedFaves;
		// if (this.faves === []) {
		// 	mappedFaves = <div className="favorites-container">Sweet Action</div>
		// } else {
		// 	mappedFaves = this.faves.map(movie => <div key={movie.id}>{movie.title}</div>)
		// }
		
		// const mappedFaves = this.props.faves ? this.props.faves.map(movie => <div key={movie.id}>{movie.title}</div>) : null

		const mappedFaves = this.props.faves.map(movie => <MovieCard key={movie.id} movie={movie} />)

		return (
				<div>
					{mappedFaves}
			   	</div>
		)
	}
}

export default Favorites
