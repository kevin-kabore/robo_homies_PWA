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
})
