import * as actions from './actions';
import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

describe('Actions', () => {
	it('Should create an action to search robots', () => {
		const text = 'test text';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		}
	})

	// an action is a function that returns an object with a type (and payload)
	expect(actions.setSearchField(text)).toEqual(expectedAction);
})