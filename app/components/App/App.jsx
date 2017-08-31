import React, { Component } from "react";
import LoginContainer from "../Login/Login.Container.jsx";
import MovieIndexContainer from "../MovieIndex/MovieIndexContainer.jsx";
import { getNowPlaying } from "../../actions/actions";
import { Route, NavLink, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <header className="page-header">
          <NavLink to="/login" className="login-link">
            Login
          </NavLink>
          <NavLink to="/" className="movies-link">
            Movies
          </NavLink>
        </header>
        <h1>Movie Tracker</h1>
        <Route exact path="/" component={MovieIndexContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </div>
    );
  }
}
