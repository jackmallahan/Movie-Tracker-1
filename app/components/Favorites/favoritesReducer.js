const favorites = (state = null, action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, ...action.data]
		case 'SET_FAVES':
			return action.faves
		default:
			return state
	}
}

export default favorites
