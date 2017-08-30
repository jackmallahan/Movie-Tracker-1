export const getUser = (newUser) => {
	return {
		type: 'ADD_USER',
		newUser
	}
}

// export const getApi = (param) => {
// 	return function(dispatch) {
// 		fetch(api here)
// 		.then(data => data.json())
// 		.then(data => {
// 			return dispatch(saveData(data))
// 		})
// 	}
// }