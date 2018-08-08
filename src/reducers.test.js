import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

import * as actions from './actions';

import * as reducers from './reducers';

describe('searchRobots reducer', () => {
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

let initialStateUsers;
beforeEach(() => {
	initialStateUsers = {
			isPending: false,
			users: [],
			error: ''
		}
})
describe('requestUsers reducer', () => {
	it('should return the initial state', () => {
		expect(reducers.requestUsers(undefined, {})).toEqual(initialStateUsers)
	})

	it('should handle the REQUEST_USERS_PENDING action', () => {
		expect(reducers.requestUsers(initialStateUsers, {type: REQUEST_USERS_PENDING})).toEqual({...initialStateUsers, isPending: true})
	})

	it('should handle the REQUEST_USERS_SUCCESS action', () => {
		expect(reducers.requestUsers(initialStateUsers, { 
			type: REQUEST_USERS_SUCCESS,
			payload: [{
				id: 12,
				name: 'test',
				email: 'email@email.com'
			}] 
		})).toEqual({...initialStateUsers, users: [{
				id: 12,
				name: 'test',
				email: 'email@email.com'
			}] })
	})


	it('should handle the REQUEST_USERS_FAILED action', () => {
		expect(reducers.requestUsers(initialStateUsers, {type: REQUEST_USERS_FAILED, payload: 'ERROR'})).toEqual({...initialStateUsers, error: 'ERROR'})
	})
})

