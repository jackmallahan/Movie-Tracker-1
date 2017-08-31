import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/actions.jsx";
import Login from "../components/Login/Login.jsx";

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: newUser => {
      dispatch(getUser(newUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
