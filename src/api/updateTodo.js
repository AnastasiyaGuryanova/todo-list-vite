import { API_BASE_URL } from "@urls";

export const updateTodoOnServer = async (todo) => {
	const response = await fetch(`${API_BASE_URL}/${todo.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify(todo),
	});
	return response.json();
};
