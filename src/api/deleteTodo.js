import { API_BASE_URL } from "@urls";

export const deleteTodoFromServer = async (id) => {
	await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
};
