import React from "react";

const MovieCard = ({
  movie,
  addFavorite,
  user,
  removeFave,
  favorites,
  getAllFavorites
}) => {
  const { title, overview, backdrop_path, poster_path } = movie;
  const photo = backdrop_path ? backdrop_path : poster_path;

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${photo})`
      }}
      onClick={() => {
        const fart = favorites.map(film => film.title);
        if (!fart.includes(title)) {
          addFavorite({
            movie_id: movie.id,
            title: movie.title,
            user_id: user.id,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview
          });
          getAllFavorites(user.id);
        }
      }}
    >
      <h3>
        {title}
      </h3>
      <p>
        {overview}
      </p>
    </div>
  );
};

export default MovieCard;
