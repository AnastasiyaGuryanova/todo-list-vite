import {
	fetchTodosFromServer,
	addTodoToServer,
	deleteTodoFromServer,
	updateTodoOnServer,
} from "@api";
import { ActionTypes } from "@types";

export const fetchTodos = () => async (dispatch) => {
	dispatch({ type: ActionTypes.FETCH_TODOS_REQUEST });
	try {
		const data = await fetchTodosFromServer();
		dispatch({ type: ActionTypes.FETCH_TODOS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: ActionTypes.FETCH_TODOS_FAILURE,
			error: error.message,
		});
	}
};

export const addTodo = (todo) => async (dispatch) => {
	try {
		const data = await addTodoToServer(todo);
		dispatch({ type: ActionTypes.ADD_TODO_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ActionTypes.ADD_TODO_FAILURE, error: error.message });
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		await deleteTodoFromServer(id);
		dispatch({ type: ActionTypes.DELETE_TODO_SUCCESS, payload: id });
	} catch (error) {
		dispatch({
			type: ActionTypes.DELETE_TODO_FAILURE,
			error: error.message,
		});
	}
};

export const updateTodo = (todo) => async (dispatch) => {
	try {
		const data = await updateTodoOnServer(todo);
		dispatch({ type: ActionTypes.UPDATE_TODO_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: ActionTypes.UPDATE_TODO_FAILURE,
			error: error.message,
		});
	}
};
