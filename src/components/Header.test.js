import { shallow } from 'enzyme';
import React from 'react';

import Header from './Header';

describe('Header Component', () => {
	it('Will render the Component', () => {
		// snapshot testing used for all presentational/stateless components the whole component
		expect(shallow(<Header />)).toMatchSnapshot()		
	})
})
