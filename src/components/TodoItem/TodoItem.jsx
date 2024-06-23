import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "@actions";
import styles from "./toDoItem.module.css";

export const TodoItem = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(todo.text);
	const dispatch = useDispatch();
	const error = useSelector((state) => state.todos.error);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setNewTitle(todo.text);
	};

	const handleSave = () => {
		dispatch(
			updateTodo({
				...todo,
				text: newTitle,
			}),
		);
		setIsEditing(false);
	};

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
	};

	const handleChange = ({ target }) => {
		setNewTitle(target.value);
	};

	return (
		<div className={styles.todoItem}>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={newTitle}
						onChange={handleChange}
					/>
					<button
						onClick={handleSave}
						className={styles.btnSave}
						type="button"
						title="Сохранить"
					>
						<i className="fas fa-check"></i>
					</button>
					<button
						onClick={handleCancel}
						className={styles.btnCancel}
						type="button"
						title="Отмена"
					>
						<i className="fa fa-times"></i>
					</button>
				</div>
			) : (
				<div>
					<span>{todo.text}</span>
					<button
						className={styles.btnEdit}
						onClick={handleEdit}
						type="button"
						title="Редактировать"
					>
						<i className="fa fa-edit"></i>
					</button>

					<button
						className={styles.btnDelete}
						type="button"
						title="Удалить"
						onClick={handleDelete}
					>
						<i className="fa fa-trash"></i>
					</button>
				</div>
			)}
			{error && <p>Ошибка: {error}</p>}
		</div>
	);
};
