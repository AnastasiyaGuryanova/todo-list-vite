import { useState } from "react";
import { API_BASE_URL } from "@urls";
import { useTodos } from "@contexts";

export const useRequestAddListItem = () => {
	const [newTodo, setNewTodo] = useState("");
	const { refreshTodos, setRefreshTodos } = useTodos();

	const addTodo = async () => {
		try {
			if (newTodo) {
				await fetch(`${API_BASE_URL}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=utf-8",
					},
					body: JSON.stringify({ title: newTodo }),
				});
				setNewTodo("");
				setRefreshTodos(!refreshTodos);
			}
		} catch (error) {
			console.error("Ошибка при добавлении задачи", error);
		}
	};

	return {
		addTodo,
		newTodo,
		setNewTodo,
	};
};
