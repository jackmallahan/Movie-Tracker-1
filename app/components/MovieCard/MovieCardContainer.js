import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../../actions/actions.jsx";
import MovieCard from "./MovieCard.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { user: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFavorite: addFavorite }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
