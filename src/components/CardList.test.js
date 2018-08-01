import { shallow } from 'enzyme';
import React from 'react';

import CardList from './CardList';

describe('CardList Component', () => {
	const mockRobots = [
	{
		id: 1,
		name: 'John Snow',
		email: 'johm.snow@gmail.com'
	}]
	it('Will render the Component', () => {
		// snapshot testing used for all presentational/stateless components the whole component
		expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()		
	})
})
