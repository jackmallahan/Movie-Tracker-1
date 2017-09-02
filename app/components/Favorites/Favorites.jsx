import React, { Component } from 'react'
import MovieCardContainer from '../MovieCard/MovieCardContainer.js'

class Favorites extends Component {
	constructor(props) {
		super(props)
		this.state = {
			favorites: null
		}
	}

	componentDidMount() {
		
		// this.setState({
		// 	favorites: this.props.favorites
		// })

		// if (this.props.user.id) {
		// 	console.log('in if in faves.jsx');
			
			this.props.getAllFavorites(this.props.user.id)
		// }
	}

	render() {
		
		let mappedFaves;

		if (this.props.faves[0]) {
			mappedFaves = this.props.faves.map(movie => <MovieCardContainer key={movie.id} movie={movie} />)
		} else {
			mappedFaves = <div className="sweet-action">Sweet Action</div>
		}

		return (
				<div className="faves-list">
					{mappedFaves}
			   	</div>
		)
	}
}

export default Favorites
