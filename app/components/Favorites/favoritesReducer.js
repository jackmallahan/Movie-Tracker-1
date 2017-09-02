const favorites = (state = [], action) => {
	console.log('action ', action);
	
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, ...action.movie]
		case 'SET_FAVES':
			return action.faves
		default:
			return state
	}
}

export default favorites
