import React from "react";
import { connect } from "react-redux";
import { addFavorite, removeFave, getAllFavorites } from "../../actions/actions.jsx";
import MovieCard from "./MovieCard.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { user: state.loggedIn, favorites: state.favorites };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFavorite: addFavorite, removeFave: removeFave, getAllFavorites: getAllFavorites }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
