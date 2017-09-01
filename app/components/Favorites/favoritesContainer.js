import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../../actions/actions'
import MovieIndex from './MovieIndex.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { favorites: state.favorites }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ favClick: addFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
