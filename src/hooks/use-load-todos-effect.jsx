import { useEffect, useCallback } from "react";
import { useTodos, useUI } from "@contexts";
import { API_BASE_URL } from "@urls";

export const useLoadTodosEffect = () => {
	const { isSorted, setIsLoading } = useUI();
	const { refreshTodos, setTodoList } = useTodos();

	const fetchTodos = useCallback(async () => {
		try {
			setIsLoading(true);
			const loadedData = await fetch(`${API_BASE_URL}`);

			if (!loadedData.ok) {
				throw new Error("Ошибка в получении данных о задачах");
			}

			let loadedTodos = await loadedData.json();

			if (isSorted) {
				const sortedTodos = [...loadedTodos].sort((a, b) =>
					a.title.localeCompare(b.title),
				);
				setTodoList(sortedTodos);
			} else {
				setTodoList(loadedTodos);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [isSorted]);

	useEffect(() => {
		fetchTodos();
	}, [refreshTodos, fetchTodos]);

	return;
};
