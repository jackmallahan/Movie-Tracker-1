import { combineReducers } from 'redux'
import users from './userReducer'
import loggedIn from './loginReducer'
import favorites from '../components/Favorites/favoritesReducer'
import filmsNowPlaying from './filmsNowPlaying'

const rootReducer = combineReducers({
	users,
	filmsNowPlaying,
	loggedIn,
	favorites
})

export default rootReducer
