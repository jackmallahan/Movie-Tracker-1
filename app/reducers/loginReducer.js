const login = (state = [], action) => {
  console.log(action);
	switch (action.type) {
		case 'GET_USERS':
			return [...action.users]
		default:
			return state
	}
}

export defualt login
