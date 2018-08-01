import { shallow } from 'enzyme';
import React from 'react';

import Card from './Card';

describe('Card Component', () => {
	it('Will render the Component', () => {
		// snapshot testing used for all presentational/stateless components the whole component
		expect(shallow(<Card />)).toMatchSnapshot()		
	})
})
