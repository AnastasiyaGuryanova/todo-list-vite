import { ActionTypes } from "@types";

const initialState = {
	todos: [],
	loading: false,
	error: null,
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODOS_REQUEST:
			return { ...state, loading: true };

		case ActionTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: action.payload };

		case ActionTypes.FETCH_TODOS_FAILURE:
			return { ...state, loading: false, error: action.error };

		case ActionTypes.ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [...state.todos, action.payload],
				error: null,
			};

		case ActionTypes.ADD_TODO_FAILURE:
			return { ...state, error: action.error };

		case ActionTypes.DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
				error: null,
			};
		case ActionTypes.DELETE_TODO_FAILURE:
			return { ...state, error: action.error };

		case ActionTypes.UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
				error: null,
			};

		case ActionTypes.UPDATE_TODO_FAILURE:
			return { ...state, error: action.error };

		default:
			return state;
	}
};
