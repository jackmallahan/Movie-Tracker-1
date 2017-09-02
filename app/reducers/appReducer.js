const app = (state = null, action) => {
	switch (action.type) {
		case 'GET_FROM_LOCAL':
			console.log('action', action)
			return action.storedUser
		default:
			return state
	}
}

export default app
