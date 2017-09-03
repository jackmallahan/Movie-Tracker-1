import React from "react";
import { connect } from "react-redux";
import {
  getNowPlaying,
  addFavorite,
  getAllFavorites,
  login
} from "../../actions/actions.jsx";
import MovieIndex from "./MovieIndex.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    filmsNowPlaying: state.filmsNowPlaying,
    currentUser: state.loggedIn,
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadNowPlaying: getNowPlaying,
      getAllFavorites: getAllFavorites,
      login: login
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
