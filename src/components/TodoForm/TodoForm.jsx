import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@actions";
import styles from "./TodoForm.module.css";

export const TodoForm = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim() === "") {
			return;
		}

		dispatch(
			addTodo({
				text: text.trim(),
				completed: false,
			}),
		);
		setText("");
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				className={styles.input}
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Добавить новую задачу"
			/>
			<button className={styles.btnForm} type="submit">
				Добавить задачу
			</button>
		</form>
	);
};
