import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { createThunkMiddleware, applyMiddlewater } from './redux-thunk-local'
import { Provider } from 'react-redux'
// import './main.css'
// import thunk from 'redux-thunk'
import key from './utils/APIkey'

import rootReducer from './reducers'
import App from './components/App/App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const thunk = createThunkMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk), devTools)

//==========================

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
return next(action);
  };
}
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
//==========================

// function fetchNowPlaying() {
// 	fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=$%7Bpage%7D`)
// 		.then(data => data.json())
// 		.then(data => console.log(data))
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
