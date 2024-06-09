import React, { useState } from "react";
import { useRequestDeleteListItem, useRequestUpdateListItem } from "@hooks";
import styles from "./toDoItem.module.css";

export const TodoItem = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(todo.title);

	const { updateTodo } = useRequestUpdateListItem();

	const { deleteTodo } = useRequestDeleteListItem();

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setNewTitle(todo.title);
	};

	const handleSave = () => {
		updateTodo(todo.id, newTitle);
		setIsEditing(false);
	};

	const handleDelete = () => {
		deleteTodo(todo.id);
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
						{" "}
						<i className="fa fa-times"></i>
					</button>
				</div>
			) : (
				<div>
					<span>{todo.title}</span>
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
		</div>
	);
};
