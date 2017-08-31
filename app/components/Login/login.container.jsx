import React from 'react'
import { connect } from 'react-redux'
import { getUser, postNewUser } from '../../actions/actions'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { users: state.users }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ handleSubmit: getUser }, dispatch)

	// return {
	//   handleSubmit: newUser => {
	//     dispatch(postNewUser(newUser));
	//   }
	// };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
