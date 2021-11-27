import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledFlexGrid = styled.div`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const StyledInput = styled.input`
    width: 310px;
    min-height: 80px;
    font-size: 32px;
    border-radius: 10px;
    background-color: var(--very-dark-desaturated-blue);
    text-align: right;
    padding: 10px;
    color: var(--white);
    
    &::placeholder {
        color: var(--white);
    }
`

const StyledGrid = styled.div`
    min-width: 300px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
    gap: 15px 10px;
    background-color: var(--dark-desaturated-blue);
    padding: 20px;
    border-radius: 10px;
`
const CalcGrid = () => {
    return (
        <StyledFlexGrid>
            <StyledInput type="text" type="number" placeholder="0"/>
            <StyledGrid>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button classe="desaturated"label="DEL"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="+"/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="-"/>
                <Button label="."/>
                <Button label="0"/>
                <Button label="/"/>
                <Button label="x"/>
                <Button classe="span-two desaturated" label="RESET"/>
                <Button classe="span-two red" label="="/>
            </StyledGrid>
        </StyledFlexGrid>
    )
}

export default CalcGrid
