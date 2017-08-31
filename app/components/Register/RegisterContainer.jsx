import React from "react";
import { connect } from "react-redux";
import { postNewUser } from "../../actions/actions";
import Register from "./Register.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ handleSubmit: postNewUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);