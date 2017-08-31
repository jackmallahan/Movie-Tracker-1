const login = (state = [], action) => {
	switch (action.type) {
		case 'GET_USERS':
			return [...action.users]
		default:
			return state
	}
}

export default login
