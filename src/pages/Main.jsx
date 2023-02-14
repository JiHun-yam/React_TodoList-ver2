import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header';
import InputBox from '../components/InputBox/InputBox';
import List from '../components/List/List';

// font-family: 'NanumSquareRoundLight';
// font-family: 'NanumSquareRound';
// font-family: 'NanumSquareRoundBold';
// font-family: 'NanumSquareRoundExtraBold';

// 전체 사이즈 지정 
const Container = styled.div`
 max-width: 1200px;
 height: 800px;
 min-height: 800px;
 margin: 0px auto;
 padding-top: 20px;
 

`;


function Main() {


    return (
        <Container>

            <Header />

            <InputBox />

            <List />

        </Container>
    )
}

export default Main