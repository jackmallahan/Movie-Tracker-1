import React, { Component } from "react";
import key from "../../utils/APIkey.js";
import MovieCardContainer from "../MovieCard/MovieCardContainer";

export default class MovieIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadNowPlaying(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    );

    this.props.getAllFavorites(this.props.currentUser.id);
    // if (this.props.currentUser.id) {
    //   localStorage.setItem(
    //     "currentUser",
    //     JSON.stringify(this.props.currentUser)
    //   );
    // }
  }

  render() {
    const mappedMovies = this.props.filmsNowPlaying.map(movie => {
      return <MovieCardContainer movie={movie} key={movie.id} />;
    });

    return (
      <div className="movie-list">
        {mappedMovies}
      </div>
    );
  }
}
