import React from 'react'
import styled from 'styled-components'

const HaederContainer = styled.div`
    width: 50%; 
    height: 4rem;
    background: #CCD6A6;
    margin: 0 auto;
    border-radius: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'NanumSquareRoundBold';
    
    
`;




function Header() {
    return (
        <HaederContainer>
            <h2>🚢  항해99 숙련 과제 리팩토링</h2>
        </HaederContainer>



    )
}

export default Header