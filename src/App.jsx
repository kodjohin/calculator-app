import React from 'react'
import "./App.css"
import styled from 'styled-components'
import Header from './components/Header'
import CalcGrid from './components/CalcGrid'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const App = () => {
    return (
        <StyledApp>
            <Header/>
            <CalcGrid/>
        </StyledApp>
    )
}

export default App
