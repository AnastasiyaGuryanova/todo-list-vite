import { API_BASE_URL } from "@urls";
import { useTodos } from "@contexts";

export const useRequestUpdateListItem = () => {
	const { refreshTodos, setRefreshTodos } = useTodos();

	const updateTodo = async (id, title) => {
		try {
			await fetch(`${API_BASE_URL}/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify({ title }),
			});
			setRefreshTodos(!refreshTodos);
		} catch (error) {
			console.error("Ошибка при добавлении задачи", error);
		}
	};

	return {
		updateTodo,
	};
};
