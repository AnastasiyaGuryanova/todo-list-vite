import { TodoForm, TodoList, SearchBar, SortButton } from "@components";
import styles from "./TodoContent.module.css";

export const TodoContent = () => {
	return (
		<>
			<TodoForm />
			<div className={styles.controlsUi}>
				<SearchBar />
				<SortButton />
			</div>

			<TodoList />
		</>
	);
};
