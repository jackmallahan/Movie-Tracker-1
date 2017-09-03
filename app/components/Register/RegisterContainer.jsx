import React from "react";
import { connect } from "react-redux";
import { postNewUser, signIn } from "../../actions/actions";
import Register from "./Register.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { user: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { handleSubmit: postNewUser, signIn: signIn },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
