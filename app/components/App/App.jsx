import React, { Component } from "react";
import LoginContainer from "../Login/login.container.jsx";
import { fetchNowPlaying } from "../../utils/fetchHelper.js"

export default class App extends Component {
  constructor() {
    super();
    this.nowPlaying = null;

  }


componentDidMount () {
  this.nowPlaying = fetchNowPlaying();
}

render() {
  let mappedMovies;
   if (this.nowPlaying !== null) {
     
    mappedMovies = this.nowPlaying.results.map(movie => <div className="movie"> {movie.title} </div>)
   }
    
    return (
      <div className="app-container">
        <h1>Movie Tracker</h1>
        { mappedMovies ? mappedMovies : <p> no movies </p> }
        <LoginContainer />
      </div>
    );
  }
}
