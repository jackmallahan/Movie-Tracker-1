import React, { Component } from "react";
import key from "../../utils/APIkey.js";

export default class MovieIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadNowPlaying(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=$%7Bpage%7D`
    );
  }

  render() {
    return <div>MOVIES</div>;
  }
}
