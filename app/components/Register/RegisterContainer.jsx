import React from 'react'
import { connect } from 'react-redux'
import { postNewUser, signIn, setFavorites } from '../../actions/actions'
import Register from './Register.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { users: state.loggedIn }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ handleSubmit: postNewUser, signIn: signIn, resetFavorites: setFavorites }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
