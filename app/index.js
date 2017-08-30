import { createStore, applyMiddleware } from 'redux'
import App from './components/App/App'
// import './main.css'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import key from './utils/APIkey'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

render(
	<Provider store={ store } >
		<App />
	</Provider>,
	document.getElementById('main')
)
