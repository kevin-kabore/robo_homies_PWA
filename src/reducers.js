import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './types.js';

const initialStateSearch = {
	searchField: ''
};

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return{
				...state,
				searchField: action.payload
			}
		default: 
			return state;
	}
}

const initialStateUsers = {
	isPending: false,
	users: [],
	error: ''
}

export  const requestUsers = (state=initialStateUsers, action={}) => {
	switch (action.type) {
		case REQUEST_USERS_PENDING:
			return {
				...state,
				isPending: true
			}
		case REQUEST_USERS_SUCCESS:
			return {
				...state,
				isPending: false,
				users: action.payload
			}
		case REQUEST_USERS_FAILED:
			return {
				...state,
				error: action.payload,
				isPending: false
			}
		default:
			return state;
	}
}