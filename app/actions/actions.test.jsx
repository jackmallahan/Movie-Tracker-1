import * as action from './actions'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
	const mockResponse = (status, statusText, response) => {
		return new window.Response(response, {
			status: status,
			statusText: statusText,
			headers: {
				'Content-type': 'application/json'
			}
		})
	}
	let mockData
	let response

	beforeEach(() => {
		fetchMock.get('/api/users/new', {
			status: 200,
			body: response
		})
	})

	afterEach(() => {
		fetchMock.restore()
	})

	describe('SAVE_DATA action test', () => {
		it('should save data', () => {
			const data = {
				adult: false,
				backdrop_path: '/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg',
				id: 396422,
				overview:
					"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
				poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
				release_date: '2017-08-03',
				title: 'Annabelle: Creation'
			}

			const expectedAction = {
				data: {
					adult: false,
					backdrop_path: '/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg',
					id: 396422,
					overview:
						"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
					poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
					release_date: '2017-08-03',
					title: 'Annabelle: Creation'
				},
				type: 'SAVE_DATA'
			}

			expect(action.saveData(data)).toEqual(expectedAction)
		})
	})

	describe('LOGIN action test', () => {
		it('should log user in', () => {
			const userInfo = {
				email: 'email@email.com',
				password: 'fart'
			}

			const expectedAction = {
				userInfo: {
					email: 'email@email.com',
					password: 'fart'
				},
				type: 'LOGIN'
			}
			expect(action.login(userInfo)).toEqual(expectedAction)
		})
	})

	describe('REGISTER action test', () => {
		it('should register user', () => {
			const userInfo = {
				name: 'Theonius',
				email: 'email@email.com',
				password: '773mhd8JJoi49KM'
			}

			const expectedAction = {
				userInfo: {
					name: 'Theonius',
					email: 'email@email.com',
					password: '773mhd8JJoi49KM'
				},
				type: 'REGISTER'
			}
			expect(action.register(userInfo)).toEqual(expectedAction)
		})
	})

	describe('ADD_FAVORITE action test', () => {
		it('should add favorite', () => {
			const movie = {
				adult: false,
				backdrop_path: '/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg',
				id: 396422,
				overview:
					"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
				poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
				release_date: '2017-08-03',
				title: 'Annabelle: Creation'
			}

			const expectedAction = {
				movie: {
					adult: false,
					backdrop_path: '/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg',
					id: 396422,
					overview:
						"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
					poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
					release_date: '2017-08-03',
					title: 'Annabelle: Creation'
				},
				type: 'ADD_FAVORITE'
			}
			expect(action.favorite(movie)).toEqual(expectedAction)
		})
	})

	describe('SET_FAVES action test', () => {
		it('should set favorites', () => {
			const faves = [
				{
					id: 475,
					movie_id: 396422,
					user_id: 51,
					title: 'Annabelle: Creation',
					poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
					release_date: '2017-08-03',
					vote_average: '6.5',
					overview:
						"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle."
				}
			]

			const expectedAction = {
				type: 'SET_FAVES',
				faves: [
					{
						id: 475,
						movie_id: 396422,
						user_id: 51,
						title: 'Annabelle: Creation',
						poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
						release_date: '2017-08-03',
						vote_average: '6.5',
						overview:
							"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle."
					}
				]
			}
			expect(action.setFavorites(faves)).toEqual(expectedAction)
		})
	})

	describe('GET_FROM_LOCAL action test', () => {
		it('should get local storage', () => {
			const storedUser = {
				id: 23,
				email: 'email@email.com',
				password: '773mhd8JJoi49KM'
			}

			const expectedAction = {
				storedUser: {
					id: 23,
					email: 'email@email.com',
					password: '773mhd8JJoi49KM'
				},
				type: 'GET_FROM_LOCAL'
			}
			expect(action.getFromLocal(storedUser)).toEqual(expectedAction)
		})
	})

	describe('REMOVE_FAVE action test', () => {
		it('should remove movie from favorites', () => {
			const faves = [
				{
					id: 475,
					movie_id: 396422,
					user_id: 51,
					title: 'Annabelle: Creation',
					poster_path: '/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg',
					release_date: '2017-08-03',
					vote_average: '6.5',
					overview:
						"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle."
				}
			]
			const expectedAction = {
				type: 'REMOVE_FAVORITE',
				faveId: 475
			}
			expect(action.removeFromFavorites('userId', faves[0].id)).toEqual(expectedAction)
		})
	})

	describe('postNewUser action test', () => {
		it.only('should post a new user to the backend', () => {
			mockData = { name: 'Jack', email: 'simplejack@aol.com', password: 'hi' }

			window.fetch = jest
				.fn()
				.mockImplementation(() => Promise.resolve(mockResponse(200, null, JSON.stringify(mockData))))

			response = {
				userInfo: { name: 'Jack', email: 'simplejack@aol.com', password: 'hi', id: 1 },
				type: 'REGISTER'
			}
			console.log(action.postNewUser(mockData))
			expect(action.register(action.postNewUser(mockData))).toEqual(response)
		})
	})
})
