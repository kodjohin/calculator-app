import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import "./App.css";
import Header from "./components/Header";
import CalcGrid from "./components/CalcGrid";
import { themeOne, themeTwo, themeThree, GlobalStyles } from "./themes";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const App = () => {
	//#region ================ Manage themes ==================================================
	const [theme, setTheme] = useState(
		() => JSON.parse(localStorage.getItem("prefers-color-scheme")) || themeOne
	);
	const onThemeChanged = (value) => {
		// console.log(value);
		switch (value) {
			case "themeOne":
				setTheme(themeOne);
				break;
			case "themeTwo":
				setTheme(themeTwo);
				break;
			case "themeThree":
				setTheme(themeThree);
				break;
			default:
		}
	};
	useEffect(() => {
		localStorage.setItem("prefers-color-scheme", JSON.stringify(theme));
	}, [theme]);
	//#endregion ================ End Manage themes ===========================================
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledApp>
				<Header onThemeChange={onThemeChanged} />
				<CalcGrid />
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;
