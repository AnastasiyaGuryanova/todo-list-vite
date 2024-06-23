import { API_BASE_URL } from "@urls";

export const fetchTodosFromServer = async () => {
	const response = await fetch(`${API_BASE_URL}`);
	return response.json();
};
