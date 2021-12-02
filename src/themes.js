import { createGlobalStyle } from "styled-components";

export const themeOne = {
	id: "themeOne",
	body: "hsl(222, 26%, 31%)",
	font: "white",
	headerFont: "white",
	keysFont: "hsl(221, 14%, 31%)",
	keysBackground: "hsl(30, 25%, 89%)",
	keysBackgroundShadow: "hsl(28, 16%, 65%)",
	padBackground: "hsl(223, 31%, 20%)",
	textInputBackground: "hsl(224, 36%, 15%)",
	equalKeyBackground: "hsl(6, 63%, 50%)",
	equalKeyBackgroundShadow: "hsl(6, 70%, 34%)",
	equalKeyText: "white",
	switchBackground: "hsl(6, 63%, 50%)",
	delKeyBackground: "hsl(225, 21%, 49%); ",
	delKeyBackgroundShadow: "hsl(222, 26%, 31%) ",
};
export const themeTwo = {
	id: "themeTwo",
	body: "hsl(0, 0%, 93%)",
	font: "white",
	headerFont: "hsl(60, 10%, 19%)",
	keysFont: "hsl(60, 10%, 19%)",
	keysBackground: "hsl(30, 25%, 89%)",
	keysBackgroundShadow: "hsl(28, 16%, 65%)",
	padBackground: "hsl(0, 5%, 81%)",
	textInputBackground: "hsl(45, 7%, 89%)",
	equalKeyBackground: "hsl(25, 98%, 40%)",
	equalKeyBackgroundShadow: "hsl(25, 99%, 27%)",
	equalKeyText: "white",
	switchBackground: "hsl(6, 63%, 50%)",
	delKeyBackground: "hsl(185, 42%, 37%) ",
	delKeyBackgroundShadow: "hsl(185, 58%, 25%) ",
};
export const themeThree = {
	id: "themeThree",
	body: "hsl(268, 75%, 9%)",
	font: "white",
	headerFont: "hsl(52, 100%, 62%)",
	keysFont: "hsl(52, 100%, 62%)",
	keysBackground: "hsl(268, 47%, 21%)",
	keysBackgroundShadow: "hsl(290, 70%, 36%)",
	padBackground: "hsl(268, 71%, 12%)",
	textInputBackground: "hsl(268, 71%, 12%)",
	equalKeyBackground: "hsl(176, 100%, 44%)",
	equalKeyBackgroundShadow: "hsl(177, 92%, 70%)",
	equalKeyText: "hsl(268, 75%, 9%)",
	switchBackground: "hsl(176, 100%, 44%)",
	delKeyBackground: "hsl(281, 89%, 26%)",
	delKeyBackgroundShadow: "hsl(285, 91%, 52%)",
};

export const GlobalStyles = createGlobalStyle`
    *,
      *::after,
      *::before {
        box-sizing: border-box;
    }
    
    body{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.font};
        
        transition: all .5s ease;
    }
`;
