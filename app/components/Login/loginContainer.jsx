import React from 'react'
import { connect } from 'react-redux'
import { retrieveUsers, signIn } from '../../actions/actions'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { currentUser: state.loggedIn }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ handleSubmit: signIn, loadUsers: retrieveUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
