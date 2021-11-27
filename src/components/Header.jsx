import React from 'react'
import styled from 'styled-components'

import ThemeSelector from "./ThemeSelector"

const StyledHeader = styled.div`
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <h2>calc</h2>
            <ThemeSelector/>
        </StyledHeader>
    )
}

export default Header
