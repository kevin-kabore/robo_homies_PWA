import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

import apiCall from './api/api'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestUsers = () => (dispatch) => {
	dispatch({type: REQUEST_USERS_PENDING});

	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(users => dispatch({ type: REQUEST_USERS_SUCCESS, payload: users }))
		.catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}