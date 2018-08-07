import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

import * as actions from './actions';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	};
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
	})

	it('should handle CHANGE_SEARCH_FIELD action', () => {
		expect.assertions(2);
		
		expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCH_FIELD, payload: 'hi'})).toEqual({searchField: 'hi'});
		expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('hello'))).toEqual({searchField: 'hello'});
	});
});

describe('requestRobots', () => {
	it('should return the initial state', () => {
		const initialStateUsers = {
			isPending: false,
			users: [],
			error: ''
		}

		expect(reducers.requestUsers(undefined, {})).toEqual(initialStateUsers)
	})
})

