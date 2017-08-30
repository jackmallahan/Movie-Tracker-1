import React, { Component } from "react";
import LoginContainer from "../Login/login.container.jsx";
import MovieIndexContainer from "../MovieIndex/MovieIndex.container.jsx";
import { getNowPlaying, saveData } from "../../actions/actions";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <h1>Movie Tracker</h1>

        <LoginContainer />
        <MovieIndexContainer />
      </div>
    );
  }
}
