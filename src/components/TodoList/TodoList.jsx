import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "@components";
import { fetchTodos } from "@actions";
import styles from "./TodoList.module.css";

export const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);
	const searchTerm = useSelector((state) => state.ui.searchTerm);
	const sortKey = useSelector((state) => state.ui.sortKey);
	const loading = useSelector((state) => state.todos.loading);
	const error = useSelector((state) => state.todos.error);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const filteredTodos = todos
		.filter((todo) =>
			todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
		)
		.sort((a, b) => {
			if (sortKey === "text") {
				return a.text.localeCompare(b.text);
			} else {
				return 0;
			}
		});

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>Ошибка: {error}</p>;

	return (
		<ul className={styles.list}>
			{filteredTodos.length > 0 ? (
				filteredTodos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))
			) : (
				<p>Список дел пуст.</p>
			)}
		</ul>
	);
};
