const favorites = (state = [], action) => {
	console.log('eat butts jonathan', action)
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, ...action.data]
		default:
			return state
	}
}

export default favorites
