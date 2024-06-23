import { TodoContent } from "@components";
import styles from "./app.module.css";

export const App = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles.todoListTitle}>Мой список дел</h1>
			<TodoContent />
		</div>
	);
};
