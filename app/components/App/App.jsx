import React, { Component } from "react";
import Login from "../Login/Login";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <h1>Movie Tracker</h1>
        <Login />
      </div>
    );
  }
}
