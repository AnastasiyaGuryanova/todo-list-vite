import React, { createContext, useState, useContext } from "react";

const UIContext = createContext(null);

export const useUI = () => {
	return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [filteredTodos, setFilteredTodos] = useState([]);

	const value = {
		isLoading,
		setIsLoading,
		isSorted,
		setIsSorted,
		isSearch,
		setIsSearch,
		filteredTodos,
		setFilteredTodos,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
