import { shallow } from 'enzyme';
import React from 'react';

import Scroll from './Scroll';

let wrapper;
beforeEach(() => {
	wrapper = shallow(<Scroll />);
})

describe('<Sroll />', () => {
	it('Will render the component', () => {
		expect(wrapper).toMatchSnapshot();
	})
	it('Will have an overflow property of sroll', () => {
		expect(wrapper.prop('style').overflow).toEqual('scroll')
	})
})