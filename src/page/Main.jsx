import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Headerarea from '../components/Header/Headerarea';
import InputBox from '../components/InputBox/InputBox';


function Main() {


    // 전체 사이즈 지정 
    const Container = styled.div`
    margin-top: 10px;
    max-width: 1200px;
    height: 800px;
    min-width: 800px;
    margin: 0px auto;
    margin-bottom: 100px;
    border: 1px solid red;
`;
    // Header 부분
    const Header = styled.div`
        width: 100%;
        height: 10%;
        margin-top: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    `

    // 인풋박스 부분 
    const MainInputBox = styled.div`
    
         background: #D7E9B9;
    border-radius: 12px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
    `

    // todo 리스트




    const data = useSelector((state) => {
        return state.todos;
    })
    console.log(data)
    return (

        <Container>

            <Header>
                <Headerarea />
            </Header>







        </Container>
    )
}

export default Main