import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledFlexGrid = styled.div`
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
const StyledOutput = styled.div`
	width: 310px;
	min-height: 80px;
	font-size: 32px;
	border-radius: 10px;
	background-color: ${(props) => props.theme.textInputBackground};
	text-align: right;
	padding: 10px;
	color: ${(props) => props.theme.headerFont};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	word-wrap: break-word;
	word-break: break-all;
`;
const StyledGrid = styled.div`
	min-width: 300px;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(4, 60px);
	grid-template-rows: repeat(5, 60px);
	gap: 15px 10px;
	background-color: ${(props) => props.theme.padBackground};
	padding: 20px;
	border-radius: 10px;
`;
const CalcGrid = () => {
	const [previousOperand, setPreviousOperand] = useState("");
	const [currentOperand, setCurrentOperand] = useState("");
	const [operation, setOperation] = useState(undefined);

	const buttonsData = [
		{
			label: "7",
			type: "data-number",
		},
		{
			label: "8",
			type: "data-number",
		},
		{
			label: "9",
			type: "data-number",
		},
		{
			label: "DEL",
			type: "data-delete",
			classe: "desaturated",
		},
		{
			label: "4",
			type: "data-number",
		},
		{
			label: "5",
			type: "data-number",
		},
		{
			label: "6",
			type: "data-number",
		},
		{
			label: "+",
			type: "data-operation",
		},
		{
			label: "1",
			type: "data-number",
		},
		{
			label: "2",
			type: "data-number",
		},
		{
			label: "3",
			type: "data-number",
		},
		{
			label: "-",
			type: "data-operation",
		},
		{
			label: ".",
			type: "data-number",
		},
		{
			label: "0",
			type: "data-number",
		},
		{
			label: "/",
			type: "data-operation",
		},
		{
			label: "*",
			type: "data-operation",
		},
		{
			label: "RESET",
			type: "data-reset",
			classe: "span-two desaturated",
		},
		{
			label: "=",
			type: "data-equal",
			classe: "span-two red",
		},
	];

	const onClickHandler = (e) => {
		const dataType = e.target.attributes["type"].value;
		dataType === "data-number" && appendNumber(e.target.outerText);
		dataType === "data-reset" && reset();
		dataType === "data-delete" && del();
		dataType === "data-operation" && chooseOperation(e.target.outerText);
		dataType === "data-equal" && compute();
	};

	const reset = () => {
		setPreviousOperand("");
		setCurrentOperand("");
		setOperation(undefined);
	};

	const del = () => setCurrentOperand(currentOperand.toString().slice(0, -1));

	const chooseOperation = (operation) => {
		if (currentOperand === "") return;
		previousOperand !== "" && compute();
		setOperation(operation);
		setPreviousOperand(currentOperand);
		setCurrentOperand("");
	};

	const compute = () => {
		let computation;
		const prev = parseFloat(previousOperand);
		const current = parseFloat(currentOperand);
		if (isNaN(prev) || isNaN(current)) return;

		switch (operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "/":
				computation = prev / current;
				break;
			default:
				break;
		}
		setCurrentOperand(computation);
		setOperation(undefined);
		setPreviousOperand("");
	};

	useEffect(() => {
		reset();
	}, []);

	const appendNumber = (number) => {
		if (number === "." && currentOperand.includes(".")) return;
		setCurrentOperand(currentOperand.toString() + number.toString());
	};

	return (
		<StyledFlexGrid>
			<StyledOutput>
				<label type="text">
					{operation != null
						? `${currentOperand} ${operation}`
						: currentOperand}
				</label>
			</StyledOutput>
			<StyledGrid>
				{buttonsData.map((button, index) => (
					<Button
						key={index}
						classe={button.classe}
						label={button.label}
						type={button.type}
						onClick={onClickHandler}
					/>
				))}
			</StyledGrid>
		</StyledFlexGrid>
	);
};

export default CalcGrid;
