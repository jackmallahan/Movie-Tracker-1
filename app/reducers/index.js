import { combineReducers } from 'redux'
import loggedIn from './loginReducer'
import favorites from '../components/Favorites/favoritesReducer'
import filmsNowPlaying from './filmsNowPlaying'

const rootReducer = combineReducers({
	filmsNowPlaying,
	loggedIn,
	favorites
})

export default rootReducer
