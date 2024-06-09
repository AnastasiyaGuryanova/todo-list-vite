import { TodoProvider, UIProvider } from "@contexts";
import { TodoContent } from "@components";
import styles from "./app.module.css";

export const App = () => {
	return (
		<TodoProvider>
			<UIProvider>
				<div className={styles.app}>
					<h1 className={styles.todoListTitle}>Мой список дел</h1>
					<TodoContent />
				</div>
			</UIProvider>
		</TodoProvider>
	);
};
