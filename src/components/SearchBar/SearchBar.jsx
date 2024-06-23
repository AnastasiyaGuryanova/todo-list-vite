import { useDispatch } from "react-redux";
import { setSearchTerm } from "@actions";
import { debounce } from "@utils";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
	const dispatch = useDispatch();

	const handleSearch = debounce((e) => {
		dispatch(setSearchTerm(e.target.value));
	}, 300);

	return (
		<input
			className={styles.searchBar}
			type="text"
			placeholder="Поиск задач..."
			onChange={handleSearch}
		/>
	);
};
