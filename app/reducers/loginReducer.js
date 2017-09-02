const login = (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return action.userInfo
		case 'GET_FROM_LOCAL':
			return action.storedUser
		default:
			return state
	}
}

export default login
