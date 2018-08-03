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

})
