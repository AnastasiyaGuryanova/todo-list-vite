import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer,
});
