import React from "react";
import { connect } from "react-redux";
import {
  addFavorite,
  getAllFavorites,
  removeFavorite
} from "../../actions/actions.jsx";
import MovieCard from "./MovieCard.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { user: state.loggedIn, favorites: state.favorites };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addFavorite: addFavorite,
      getAllFavorites: getAllFavorites,
      removeFavorite: removeFavorite
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
