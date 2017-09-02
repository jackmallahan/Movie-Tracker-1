import { combineReducers } from 'redux'
import loggedIn from './loginReducer'
import favorites from '../components/Favorites/favoritesReducer'
import filmsNowPlaying from './filmsNowPlaying'
import savedUser from './appReducer'

const rootReducer = combineReducers({
	filmsNowPlaying,
	loggedIn,
	favorites,
	savedUser
})

export default rootReducer
