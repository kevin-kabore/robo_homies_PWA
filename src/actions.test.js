import * as actions from './actions';
import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Actions', () => {
	it('Should create an action to search robots', () => {
		const text = 'test text';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		}
		// an action is a function that returns an object with a type (and payload)
		expect(actions.setSearchField(text)).toEqual(expectedAction);
	})

	it('should handle requesting the robots api', () => {
		const store = mockStore();
		store.dispatch(actions.requestUsers());
		
		const action = store.getActions();
		// console.log('action', action);
		const expectedAction = {
			type: REQUEST_USERS_PENDING
		}
		expect(action[0]).toEqual(expectedAction)
	})
	
})


