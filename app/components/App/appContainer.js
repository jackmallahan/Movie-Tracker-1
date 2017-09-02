import React from 'react'
import { connect } from 'react-redux'
import { getFromLocal } from '../../actions/actions'
import App from '../App/App.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	console.log('mstp app container', state)
	return { loggedIn: state.savedUser }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getFromLocal: getFromLocal }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
