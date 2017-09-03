import React from "react";
import { connect } from "react-redux";
import { getAllFavorites, login } from "../../actions/actions";
import Favorites from "./Favorites.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { user: state.loggedIn, faves: state.favorites };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getAllFavorites: getAllFavorites, login: login },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
