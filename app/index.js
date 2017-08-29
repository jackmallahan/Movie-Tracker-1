import { createStore, applyMiddleware } from 'redux'
import App from './components/App/App'
// import './main.css'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import key from './utils/APIkey'
import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, applyMiddleware(thunk), devTools)

function fetchNowPlaying() {
	fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=$%7Bpage%7D`)
		.then(data => data.json())
		.then(data => console.log(data))
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
