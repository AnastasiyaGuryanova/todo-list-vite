import React from "react";
import { TodoItem } from "@components";
import { useTodos, useUI } from "@contexts";
import "./TodoList.module.css";

export const TodoList = () => {
	const { filteredTodos, isSearch } = useUI();
	const { todoList } = useTodos();

	return (
		<ul>
			{isSearch ? (
				filteredTodos.length > 0 ? (
					filteredTodos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))
				) : (
					<p>Задачи с таким названием нет.</p>
				)
			) : todoList.length > 0 ? (
				todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
			) : (
				<p>Список дел пуст.</p>
			)}
		</ul>
	);
};
