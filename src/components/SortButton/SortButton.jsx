import { useUI } from "@contexts";
import styles from "./SortButton.module.css";

export const SortButton = () => {
	const { isSorted, setIsSorted } = useUI();

	const sortTodos = () => {
		setIsSorted(!isSorted);
	};

	return (
		<button
			className={
				styles.btnSort +
				" " +
				(isSorted ? styles["sorted"] : styles["sort"])
			}
			onClick={sortTodos}
			type="button"
			title={isSorted ? "Отменить сортировку" : "Сортировать по алфавиту"}
		>
			<i className="fas fa-sort-alpha-down"></i>
		</button>
	);
};
