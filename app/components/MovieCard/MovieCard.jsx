import React from "react";

const MovieCard = ({
  movie,
  addFavorite,
  user,
  favorites,
  getAllFavorites,
  removeFavorite,
  inFavorites
}) => {
  const { title, overview, backdrop_path, poster_path } = movie;
  const photo = backdrop_path ? backdrop_path : poster_path;
  let favoriteTitles = favorites.map(film => film.title);

  return (
    <div
      className={
        favoriteTitles.includes(title) ? (
          "movie-card movie-card-selected"
        ) : (
          "movie-card"
        )
      }
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${photo})`
      }}
      onClick={e => {
        let card = e.currentTarget.classList;

        if (inFavorites === true && card[1]) {
          removeFavorite(user.id, movie.movie_id);
          return getAllFavorites(user.id);
        }

        user.id
          ? e.currentTarget.classList.toggle("movie-card-selected")
          : alert("Please log in to favorite a movie");

        if (!favoriteTitles.includes(title) && user.id) {
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
        } else if (!card[1] && inFavorites === false && user.id) {
          removeFavorite(user.id, movie.id);
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
