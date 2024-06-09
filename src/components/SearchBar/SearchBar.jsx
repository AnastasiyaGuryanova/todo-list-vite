import { useTodos, useUI } from "@contexts";
import { debounce } from "@utils/debounce.jsx";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
	const { todoList } = useTodos();
	const { setIsSearch, setFilteredTodos } = useUI();

	const searchTodo = (searchTerm) => {
		const searchedTodos = todoList.filter((todo) =>
			todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		searchTerm ? setIsSearch(true) : setIsSearch(false);
		setFilteredTodos(searchTerm ? searchedTodos : todoList);
	};

	const searchTodoWithDebounce = debounce(searchTodo, 500);

	const handleChange = (e) => {
		searchTodoWithDebounce(e.target.value);
	};

	return (
		<input
			className={styles.searchBar}
			type="text"
			placeholder="Поиск задач..."
			onChange={handleChange}
		/>
	);
};
