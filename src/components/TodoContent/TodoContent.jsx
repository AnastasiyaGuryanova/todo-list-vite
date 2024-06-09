import { TodoForm, SearchBar, SortButton, TodoList } from "@components";
import { useUI } from "@contexts";
import { useLoadTodosEffect } from "@hooks";
import styles from "./TodoContent.module.css";

export const TodoContent = () => {
	const { isLoading } = useUI();

	useLoadTodosEffect();

	return (
		<>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				<>
					<TodoForm />
					<div className={styles.controlsUi}>
						<SearchBar />
						<SortButton />
					</div>

					<TodoList />
				</>
			)}
		</>
	);
};
