import { combineReducers } from 'redux'
import getMoviesReducer from './getMoviesReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
	getMoviesReducer,
	loginReducer
})

export default rootReducer
