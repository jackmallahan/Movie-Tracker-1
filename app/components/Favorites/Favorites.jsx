import React, { Component } from "react";
import MovieCardContainer from "../MovieCard/MovieCardContainer.js";

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let loadedUser;

    localStorage.getItem("currentUser") !== "undefined" || null
      ? (loadedUser = JSON.parse(localStorage.getItem("currentUser")))
      : console.log("no user stored");

    if (loadedUser) {
      this.props.login(loadedUser);
      return this.props.getAllFavorites(loadedUser.id);
    }
  }

  render() {
    let newFaves = [];
    let faveTitles = [];
    console.log("titles", faveTitles);
    this.props.faves.forEach(movie => {
      if (faveTitles.includes(movie.title) === false) {
        faveTitles.push(movie.title);
        newFaves.push(movie);
      }
    });
    console.log("newFaves", newFaves);
    console.log("faves", this.props.faves);
    let mappedFaves;

    if (this.props.faves[0]) {
      mappedFaves = newFaves.map(movie =>
        <MovieCardContainer inFavorites={true} key={movie.id} movie={movie} />
      );
    } else {
      mappedFaves = <div className="sweet-action">Sweet Action</div>;
    }

    return (
      <div className="faves-list">
        {mappedFaves}
      </div>
    );
  }
}

export default Favorites;
