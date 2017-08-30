import React, { Component } from 'react'
import key from '../../utils/APIkey.js'
import MovieCard from '../MovieCard/MovieCard'

export default class MovieIndex extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.loadNowPlaying(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
			
		)
	}

	render() {
		const mappedMovies = this.props.filmsNowPlaying.map((movie) => {
			return <MovieCard movie={movie} key={movie.id} /> 
		})

		return (
			<div className="movie-list">
				{ mappedMovies }
			</div>
		)
	}
}
