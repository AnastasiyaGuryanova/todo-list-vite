import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortKey } from "@actions";
import styles from "./SortButton.module.css";

export const SortButton = () => {
	const sortKey = useSelector((state) => state.ui.sortKey);
	const dispatch = useDispatch();

	const sortTodos = () => {
		dispatch(setSortKey(sortKey === "text" ? "" : "text"));
	};

	return (
		<button
			className={
				styles.btnSort +
				" " +
				(sortKey === "text" ? styles["sorted"] : styles["sort"])
			}
			onClick={sortTodos}
			type="button"
			title={
				sortKey === "text"
					? "Отменить сортировку"
					: "Сортировать по алфавиту"
			}
		>
			<i className="fas fa-sort-alpha-down"></i>
		</button>
	);
};
