import React, { useEffect, useRef } from "react";
import { useRequestAddListItem } from "@hooks";
import styles from "./TodoForm.module.css";

export const TodoForm = () => {
	const inputRef = useRef(null);

	const { addTodo, newTodo, setNewTodo } = useRequestAddListItem();

	useEffect(() => {
		inputRef.current && inputRef.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTodo) return;
		addTodo(newTodo);
		setNewTodo("");
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				className={styles.input}
				type="text"
				value={newTodo}
				onChange={({ target }) => setNewTodo(target.value)}
				placeholder="Добавить новую задачу"
				ref={inputRef}
			/>
			<button className={styles.btnForm} type="submit">
				Добавить задачу
			</button>
		</form>
	);
};
