import React from "react";

const MovieCard = ({
  movie,
  addFavorite,
  user,
  favorites,
  getAllFavorites,
  removeFavorite
}) => {
  const { title, overview, backdrop_path, poster_path } = movie;
  const photo = backdrop_path ? backdrop_path : poster_path;
  let favoriteTitles;

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${photo})`
      }}
      onClick={e => {
        user.id
          ? e.currentTarget.classList.toggle("movie-card-selected")
          : null;

        favoriteTitles = favorites.map(film => film.title);
        if (!user.id) {
          alert("Please log in to favorite a movie");
        }
        if (!favoriteTitles.includes(title) && user.id) {
          console.log("adding favorites");
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
        } else if (favoriteTitles.includes(title) && user.id) {
          console.log("removing favorites");
          removeFavorite(user.id, movie.movie_id);
          getAllFavorites(user.id);
        }
      }
      }
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
