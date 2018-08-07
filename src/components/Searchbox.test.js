import { shallow } from 'enzyme';
import React from 'react';

import SeacrchBox from './SearchBox';

let wrapper;
beforeEach(() => {
	wrapper = shallow(<SeacrchBox />);
})
describe('<SeacrchBox />', () => {
	it('should render the component', () => {
		expect(wrapper).toMatchSnapshot();
	})
})