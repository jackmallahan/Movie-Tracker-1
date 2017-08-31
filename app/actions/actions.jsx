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

export const postNewUser = user => {
	return dispatch => {
		fetch("http://localhost:3000/user/new", {
			method: 'POST',
			body: JSON.stringify(user),
			header: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => console.log(res));
	}
}
