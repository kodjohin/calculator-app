import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    cursor:pointer;
    min-width: 60px;
    height: 60px;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: var(--light-grayish-orange);
    color: var(--very-dark-grayish-blue);
    box-shadow: 0 .2em 0 var(--grayish-orange);

    &.span-two {
        grid-column: span 2;
    }
    &.red {
        background-color: var(--red);
        color: var(--white);
        box-shadow: 0 .2em 0 var(--dark-red);

    }
    &.desaturated {
        background-color: hsl(225, 21%, 49%);
        color: var(--white);
        box-shadow: 0 .2em 0 var(--desaturated-blue);

    }
    &:active{
        box-shadow: 0px 1px 0px var(--grayish-orange);
    }
`

const Button = ({classe, label}) => {
    return (
        <StyledButton className={classe}>{label}</StyledButton>
    )
}

export default Button
