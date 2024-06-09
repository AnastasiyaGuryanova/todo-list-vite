import React, { createContext, useState, useContext } from "react";

const TodoContext = createContext(null);

export const useTodos = () => {
	return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([]);
	const [refreshTodos, setRefreshTodos] = useState(false);

	const value = {
		todoList,
		setTodoList,
		refreshTodos,
		setRefreshTodos,
	};

	return (
		<TodoContext.Provider value={value}>{children}</TodoContext.Provider>
	);
};
