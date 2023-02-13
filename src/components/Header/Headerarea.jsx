import React from 'react'
import styled from 'styled-components'

const HeaderTextarea = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 45px;
    background: #D7E9B9;
    
    `;
const HeaderTextH2 = styled.h2`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

function Header2() {
    return (
        <HeaderTextarea>
            <HeaderTextH2>HangHae 99 숙련과제 🌱</HeaderTextH2>
        </HeaderTextarea>
    )
}

export default Header2