import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { delete_to, update_to } from '../../redux/modules/todos'

// item Props 

// 컴포넌트를 나눌때 자기 만에 기준 세우자 컴포넌트를 세우고 다른사람이 질문할떄 
// 내가 왜 구분헸는지를 말 할수있어야 합니다 

const TodoContainer = styled.div`
    width: 240px;
    height: 140px; 
    background: #FFFBEB;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
    transition: all 0.2s ease-in-out;
`;

const Todo_title = styled.h2`
    text-align: center;
`


const ButtonList = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`;


const ButtonDelete = styled.button`
     border: none;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #FA7070;
    
`;
const ButtonChange = styled.button`
     border: none;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #93BFCF;
    `;




function Todo(item) {
    const todoSID = item.todo.id
    const todoDone = item.todo.isDone
    const todo = item.todo
    console.log(todoDone)

    // payload로 보내기 
    const dispatch = useDispatch();
    // dispatch(add_to(title, body));


    const onClickDeleteHandler = (payload) => {
        dispatch(delete_to(payload))
        console.log(item.todo.id)
    }

    const onClickDoneHandler = (payload) => {
        dispatch(update_to(payload))
        console.log(item.todo.id)
    }


    return (
        <TodoContainer>

            <div>

                <Todo_title>{item.todo.title}  </Todo_title>
                <p>{item.todo.body}</p>

            </div>


            <ButtonList>
                {/* payload로 보내기 위해 함수에 인자값으로 아이디값 보냄 */}
                <ButtonDelete onClick={() => onClickDeleteHandler(todoSID)}>삭제</ButtonDelete>

                <ButtonChange onClick={() => onClickDoneHandler(todo)}>{item.todo.isDone ? "취 소" : "완 료"}</ButtonChange>
            </ButtonList>
        </TodoContainer >
    )
}

export default Todo