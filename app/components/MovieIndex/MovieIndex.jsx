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

    let loadedUser;

    localStorage.getItem("currentUser") !== "undefined" || null
      ? (loadedUser = JSON.parse(localStorage.getItem("currentUser")))
      : console.log("no stored user");

    if (loadedUser) {
      this.props.login(loadedUser);
      return this.props.getAllFavorites(loadedUser.id);
    }
    // loadedUser
    //   ? this.props.login(loadedUser)
    //   : console.log("local storage empty");

    // this.props.getAllFavorites(loadedUser.id);
    if (this.props.currentUser.id) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(this.props.currentUser)
      );
    }
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
