export const saveData = data => {
	return {
		type: 'SAVE_DATA',
		data: data
	}
}

export const login = userInfo => {
	return {
		type: 'LOGIN',
		userInfo
	}
}

export const register = userInfo => {
	return {
		type: 'REGISTER',
		userInfo
	}
}

export const favorite = movie => {
	return {
		type: 'ADD_FAVORITE',
		movie
	}
}

export const setFavorites = faves => {
	return {
		type: 'SET_FAVES',
		faves
	}
}

export const getFromLocal = storedUser => {
	return {
		type: 'GET_FROM_LOCAL',
		storedUser
	}
}

export const removeFromFavorites = (userId, faveId) => {
	return {
		type: 'REMOVE_FAVORITE',
		faveId
	}
}

export const addFavorite = movie => {
	return dispatch => {
		fetch('/api/users/favorites/new', {
			method: 'POST',
			body: JSON.stringify(movie),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(data => data.json())
			.then(data => {
				dispatch(favorite(data))
			})
	}
}

export const getAllFavorites = userId => {
	return dispatch => {
		fetch(`/api/users/${userId}/favorites`)
			.then(data => data.json())
			.then(data => dispatch(setFavorites(data.data)))
			.catch(err => console.log(err))
	}
}

export const getNowPlaying = url => {
	return dispatch => {
		fetch(url)
			.then(data => data.json())
			.then(data => dispatch(saveData(data.results)))
	}
}

export const signIn = user => {
	return dispatch => {
		fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(data => {
				return data.ok ? data.json() : alert('ya dun fuckd up')
			})
			.then(data => {
				return dispatch(login(data.data))
			})
	}
}

export const postNewUser = user => {
	return dispatch => {
		fetch('/api/users/new', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(data => {
				data.ok ? data.json() : alert('That email is taken')
			})
			.then(parsedData => {
				dispatch(register(parsedData))
			})
			.catch(err => console.log('in catch ', err))
	}
}

export const removeFavorite = (userId, faveId) => {
	return dispatch => {
		fetch(`/api/users/${userId}/favorites/${faveId}`, {
			method: 'DELETE',
			body: JSON.stringify([userId, faveId]),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(data => {
				data.json()
				console.log('fetch data', data)
			})
			.then(data => {
				dispatch(removeFromFavorites(faveId))
			})
	}
}
