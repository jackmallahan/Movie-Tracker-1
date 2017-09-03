import React, { Component } from "react";
import MovieCardContainer from "../MovieCard/MovieCardContainer.js";

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let loadedUser = JSON.parse(localStorage.getItem("currentUser"));
    loadedUser
      ? this.props.login(loadedUser)
      : console.log("local storage empty");
    this.props.getAllFavorites(loadedUser.id);
  }

  render() {
    let mappedFaves;

    if (this.props.faves[0]) {
      mappedFaves = this.props.faves.map(movie =>
        <MovieCardContainer key={movie.id} movie={movie} />
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
