import React, { Component } from 'react'
import key from '../../utils/APIkey.js'

export default class MovieIndex extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('movie props', this.props)
		this.props.loadNowPlaying(
			'https://api.themoviedb.org/3/movie/now_playing?api_key=8b8eafe65704813392f88b71fcdd215c&language=en-US&page=1'
		)
	}

	render() {
		return <div>MOVIES</div>
	}
}
