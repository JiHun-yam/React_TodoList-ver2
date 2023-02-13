import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Headerarea from '../components/Header/Headerarea';
import InputBox from '../components/InputBox/InputBox';
import List from '../components/TodoList/List';
// import { useDispatch } from 'react-redux';


function Main() {


    // 전체 사이즈 지정 
    const Container = styled.div`
    margin-top: 10px;
    max-width: 1200px;
    height: 800px;
    min-height: 800px;
    margin: 0px auto;
    margin-bottom: 100px;
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
    margin: 15px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    `

    // todo 리스트
    const TodoList = styled.div`

    width: 90%;
    height: 660px;
    background: #D7E9B9;
    border-radius: 20px;
    padding: 0 16px;
    margin: 0 auto;

    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        `;



    const data = useSelector((state) => {
        return state.todos;
    })



    return (

        <Container>


            {/* 헤드부분 */}
            <Header>
                <Headerarea />
            </Header>

            {/* 인풋값 부분 */}
            <MainInputBox>
                <InputBox></InputBox>
            </MainInputBox>

            {/* todoList 부분 */}
            <TodoList>
                <List data={data} />
            </TodoList>


        </Container >
    )
}

export default Main