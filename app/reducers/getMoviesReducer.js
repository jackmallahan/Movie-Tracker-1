const getMoviesReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_MOVIES':
			return [...state, action.results]
		default:
			return state
	}
}

export default getMoviesReducer
