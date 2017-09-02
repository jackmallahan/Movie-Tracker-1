import React from "react";
import { connect } from "react-redux";
import { getNowPlaying, addFavorite } from "../../actions/actions.jsx";
import MovieIndex from "./MovieIndex.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    filmsNowPlaying: state.filmsNowPlaying,
    currentUser: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadNowPlaying: getNowPlaying }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
