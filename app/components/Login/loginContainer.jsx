import React from 'react'
import { connect } from 'react-redux'
import { retrieveUsers, checkUser, signIn } from '../../actions/actions'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { users: state.users }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ handleSubmit: signIn, loadUsers: retrieveUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
