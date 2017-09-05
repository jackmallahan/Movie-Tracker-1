import React from 'react'
import App from './App'
import { shallow, mount, render } from 'enzyme'
import fetchMock from 'fetch-mock'

describe('App', () => {
	let wrapper
	it('true should equal true', () => {
		expect(true)
	})

	it('should render a div', () => {
		wrapper = shallow(<appContainer />)

		console.log(wrapper)
	})
})
