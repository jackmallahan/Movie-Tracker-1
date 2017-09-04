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
  let fart;

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

        {
          /*if (e.currentTarget.classList.includes("movie-card-selected")) {
          addFavorite({
            movie_id: movie.id,
            title: movie.title,
            user_id: user.id,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview
          });
        } else {
          //removeFavorite
          console.log("remove this card from favorite");
        }*/
        }
        fart = favorites.map(film => film.title);
        if (!user.id) {
          alert("log in friendo");
        }
        if (!fart.includes(title) && user.id) {
          console.log("farting");
          addFavorite({
            movie_id: movie.id,
            title: movie.title,
            user_id: user.id,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview
          });

          return getAllFavorites(user.id);
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
