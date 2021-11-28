import React, {useState, useEffect} from 'react'
import styled ,  {ThemeProvider} from "styled-components";
import "./App.css"
import {themeOne, themeTwo, themeThree, GlobalStyles} from "./themes";
import Header from './components/Header'
import CalcGrid from './components/CalcGrid'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const App = () => {
    const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem("theme")));
    
    const onThemeChanged = (value) => {
        console.log(value);
        
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
    }

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <StyledApp>
                <Header onThemeChange={onThemeChanged}/>
                <CalcGrid/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
