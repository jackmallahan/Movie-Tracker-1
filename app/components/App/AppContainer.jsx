import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './App'

const mapStateToProps = state => {
	return { currentUser: state.loggedIn }
}

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators({ getAllFavorites: getAllFavorites }, dispatch)
// }

export default connect(mapStateToProps, null)(App)
