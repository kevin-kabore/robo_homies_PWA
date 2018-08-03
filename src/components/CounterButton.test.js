import { shallow } from 'enzyme';
import React from 'react';

import CounterButton from './CounterButton';

describe('CounterButton Component', () => {
	it('Will render the Component with state', () => {
		// snapshot testing used for all presentational/stateless components the whole component
		const mockColor = 'red';
		const wrapper = shallow(<CounterButton color={mockColor}/>);
		
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.state('count')).toEqual(0);
	})

	it('Will correctly increment the count', () => {
		const mockColor = 'red';
		const wrapper = shallow(<CounterButton color={mockColor}/>);
		
		wrapper.find('[id="counter"]').simulate('click');
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state('count')).toEqual(2);
	})

	it('Will receive the color prop', () => {
		const mockColor = 'red';
		const wrapper = shallow(<CounterButton color={mockColor}/>);

		expect(wrapper.prop('color')).toEqual('red');
	})
})
