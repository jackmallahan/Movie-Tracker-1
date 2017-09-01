import React from 'react'

const MovieCard = ({ movie }) => {
	const { title, overview, backdrop_path, poster_path } = movie
	const photo = backdrop_path ? backdrop_path : poster_path
	return (
		<div
			className="movie-card"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${photo})`
			}}
		>
			<h3>
				{title}
				<button>Favorite</button>
			</h3>
			<p>{overview}</p>
		</div>
	)
}

export default MovieCard
