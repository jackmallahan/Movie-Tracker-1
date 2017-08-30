export const getUser = newUser => {
	return {
		type: 'ADD_USER',
		newUser
	}
}

export const saveData = data => {
	return {
		type: 'SAVE_DATA',
		data: data
	}
}

export const getNowPlaying = url => {
	return dispatch => {
		fetch(url)
			.then(data => data.json())
			.then(data => dispatch(saveData(data.results)))
	}
}
