const register = (state = {}, action) => {
	switch (action.type) {
		case 'REGISTER':
			return Object.assign(state, {
				name: action.user.name,
				email: action.user.user,
				password: action.user.password
			})

		default:
			return state
	}
}
