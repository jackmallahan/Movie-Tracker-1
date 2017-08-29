import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import key from './utils/APIkey'

const store = createStore(rootReducer, applyMiddleware(thunk))

function fetchMovies() {
	return fetch(``)
}
