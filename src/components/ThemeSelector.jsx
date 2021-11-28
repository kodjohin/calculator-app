import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const StyledSelector = styled.div`
	min-width: 140px;
	font-size: 0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	h4 {
		padding-bottom: 7px;
	}
`;
const StyledSwitch = styled.div`
	padding: 5px 5px 3px 5px;
	border-radius: 30px;
	background-color: ${(props) => props.theme.padBackground};
	border: none;
	input {
		display: none;
	}

	label {
		cursor: pointer;
		margin: 0 1px;
	}
	label:before {
		content: "";
		display: inline-block;
		// display: block; Switch to vertical align
		height: 20px;
		width: 20px;
		border-radius: 50%;
		transition: box-shadow 0.4s ease, background 0.3s ease;
	}
	input:checked + label:before {
		background: ${(props) => props.theme.switchBackground};
	}
`;
const ThemeSelector = ({ onThemeChange }) => {
	const themeContext = useContext(ThemeContext);

	return (
		<StyledSelector>
			<h4>THEME</h4>
			<div>
				<h4
					style={{
						display: "flex",
						justifyContent: "space-around",
						paddingBottom: "5px",
					}}
				>
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</h4>
				<StyledSwitch onChange={(e) => onThemeChange(e.target.value)}>
					<input
						type="radio"
						name="theme"
						id="t1"
						value="themeOne"
						defaultChecked={themeContext.id === "themeOne"}
					/>
					<label htmlFor="t1"></label>
					<input
						type="radio"
						name="theme"
						id="t2"
						value="themeTwo"
						defaultChecked={themeContext.id === "themeTwo"}
					/>
					<label htmlFor="t2"></label>
					<input
						type="radio"
						name="theme"
						id="t3"
						value="themeThree"
						defaultChecked={themeContext.id === "themeThree"}
					/>
					<label htmlFor="t3"></label>
				</StyledSwitch>
			</div>
		</StyledSelector>
	);
};

export default ThemeSelector;
