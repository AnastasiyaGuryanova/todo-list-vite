import { ActionTypes } from "@types";

export const setSearchTerm = (term) => ({
	type: ActionTypes.SET_SEARCH_TERM,
	payload: term,
});

export const setSortKey = (key) => ({
	type: ActionTypes.SET_SORT_KEY,
	payload: key,
});
