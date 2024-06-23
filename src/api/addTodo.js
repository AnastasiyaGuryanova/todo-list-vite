import { API_BASE_URL } from "@urls";

export const addTodoToServer = async (todo) => {
	const response = await fetch(`${API_BASE_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(todo),
	});
	return response.json();
};
