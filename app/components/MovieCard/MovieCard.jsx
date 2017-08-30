import React from 'react'

const MovieCard = ({ movie }) => {
    const { title, overview, backdrop_path, poster_path } = movie
    return(
        <div className="movie-card" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`}}>
            <h3>{title}</h3>
            <p>
                {overview}
            </p>
        </div>
    )
}

export default MovieCard