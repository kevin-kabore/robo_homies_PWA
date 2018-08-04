import { shallow } from 'enzyme';
import React from 'react';
import { createMockStore } from 'redux-test-utils';

import MainPage from './MainPage';


let wrapper; 
beforeEach(() => { // will run before each test
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
    	isPendning: false,
	}
	wrapper = shallow(<MainPage {...mockProps}/> )
})


describe('<MainPage />', () => {
	it('Will render the MainPage component', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('filters robots correctly', () => {
		const mockProps2 = {
			onRequestRobots: jest.fn(),
			robots: [{
				id: 1,
				name: 'Kevin',
				email: 'kevin@email.com'
			}],
			searchField: 'Kev',
	    	isPendning: false,
		}
		const wrapper2 = shallow(<MainPage {...mockProps2}/> )

		expect(wrapper2.instance().filterRobots() ).toEqual([{
				id: 1,
				name: 'Kevin',
				email: 'kevin@email.com'
			}])
	})


	it('filters robots correctly 2', () => {
		const mockProps3 = {
			onRequestRobots: jest.fn(),
			robots: [{
				id: 1,
				name: 'Kevin',
				email: 'kevin@email.com'
			}],
			searchField: 'a',
	    	isPendning: false,
		}
		const wrapper3 = shallow(<MainPage {...mockProps3}/> )

		expect(wrapper3.instance().filterRobots()).toEqual([])
	})

	it('renders loading text if isPending is true', () => {
		const mockProps4 = {
			onRequestRobots: jest.fn(),
			robots: [],
			searchField: '',
	    	isPending: true
		}
		const wrapper4 = shallow(<MainPage {...mockProps4}/> )


		expect(wrapper4.text()).toEqual('Loading...')
	})
})
