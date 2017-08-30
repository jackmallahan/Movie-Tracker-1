import { combineReducers } from 'redux'
import users from './userReducer'
import filmsNowPlaying from './filmsNowPlaying'

const rootReducer = combineReducers({
	users,
	filmsNowPlaying
})

export default rootReducer
