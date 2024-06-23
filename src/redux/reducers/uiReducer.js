import { ActionTypes } from "@types";

const initialState = {
	searchTerm: "",
	sortKey: "",
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_SEARCH_TERM:
			return { ...state, searchTerm: action.payload };
		case ActionTypes.SET_SORT_KEY:
			return { ...state, sortKey: action.payload };
		default:
			return state;
	}
};
