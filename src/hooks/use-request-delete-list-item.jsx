import { API_BASE_URL } from "@urls";
import { useTodos } from "@contexts";

export const useRequestDeleteListItem = () => {
	const { refreshTodos, setRefreshTodos } = useTodos();

	const deleteTodo = async (id) => {
		try {
			await fetch(`${API_BASE_URL}/${id}`, {
				method: "DELETE",
			});
			setRefreshTodos(!refreshTodos);
		} catch (error) {
			console.error("Ошибка при удалении задачи", error);
		}
	};

	return {
		deleteTodo,
	};
};
