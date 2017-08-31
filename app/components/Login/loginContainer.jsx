import React from 'react'
import { connect } from 'react-redux'
import { retrieveUsers, checkUser } from '../../actions/actions'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { users: state.users }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ handleSubmit: checkUser, loadUsers: retrieveUsers }, dispatch)

	// return {
	//   handleSubmit: newUser => {
	//     dispatch(postNewUser(newUser));
	//   }
	// };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
