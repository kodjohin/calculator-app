import React from "react";
import styled from "styled-components";

import ThemeSelector from "./ThemeSelector";

const StyledHeader = styled.div`
	min-width: 300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	margin-bottom: 30px;
	color: ${(props) => props.theme.headerFont};
`;

const Header = ({ onThemeChange }) => {
	return (
		<StyledHeader>
			<h2>calc</h2>
			<ThemeSelector onThemeChange={onThemeChange} />
		</StyledHeader>
	);
};

export default Header;
