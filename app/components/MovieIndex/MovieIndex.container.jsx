import React from "react";
import { connect } from "react-redux";
import { getNowPlaying } from "../../actions/actions.jsx";
import MovieIndex from "./MovieIndex.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { filmsNowPlaying: state.filmsNowPlaying };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadNowPlaying: getNowPlaying }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
