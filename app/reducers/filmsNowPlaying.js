const filmsNowPlaying = (state = [], action) => {
	console.log('movie reducer', action)
	switch (action.type) {
		case 'SAVE_DATA':
			return action.data
		default:
			return state
	}
}

export default filmsNowPlaying
