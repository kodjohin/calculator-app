import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	position: relative;
	cursor: pointer;
	min-width: 60px;
	height: 60px;
	font-size: 1.5rem;
	border-radius: 5px;
	background-color: ${(props) => props.theme.keysBackground};
	color: ${(props) => props.theme.keysFont};
	box-shadow: 0 0.2em 0 ${(props) => props.theme.keysBackgroundShadow};
	border: none;

	&.span-two {
		grid-column: span 2;
	}
	&.red {
		background-color: ${(props) => props.theme.equalKeyBackground};
		color: ${(props) => props.theme.equalKeyText};
		box-shadow: 0 0.2em 0 ${(props) => props.theme.equalKeyBackgroundShadow};
	}
	&.desaturated {
		background-color: ${(props) => props.theme.delKeyBackground};
		color: ${(props) => props.theme.font};
		box-shadow: 0 0.2em 0 ${(props) => props.theme.delKeyBackgroundShadow};
	}
	&:active {
		top: 5px;
		box-shadow: 0px 1px 0px ${(props) => props.theme.keysBackgroundShadow};
	}
`;

const Button = (props) => {
	const { classe, label, ...other } = props;

	return (
		<StyledButton
			className={classe}
			{...other}
			onClick={(e) => props.onClick(e)}
		>
			{label}
		</StyledButton>
	);
};

export default Button;
