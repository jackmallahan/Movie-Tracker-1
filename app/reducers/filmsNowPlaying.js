const filmsNowPlaying = (state = [], action) => {
	switch (action.type) {
		case 'SAVE_DATA':
			return action.data
		default:
			return state
	}
}

export default filmsNowPlaying
