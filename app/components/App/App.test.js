import React from 'react'
import appContainer from './appContainer.js'
import { shallow, mount, render } from 'enzyme'
import fetchMock from 'fetch-mock'

describe('App', () => {
	let wrapper
	it('true should equal true', () => {
		expect(true)
	})

	it('should render a div', () => {
		wrapper = shallow(<appContainer />)

		console.log(wrapper.find('div').length)
	})
})
