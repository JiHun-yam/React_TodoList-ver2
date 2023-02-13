import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { delete_to, update_to } from '../../redux/modules/todos'
import { useNavigate } from 'react-router-dom';

// item Props 

// 컴포넌트를 나눌때 자기 만에 기준 세우자 컴포넌트를 세우고 다른사람이 질문할떄 
// 내가 왜 구분헸는지를 말 할수있어야 합니다 

const TodoContainer = styled.div`
    width: 240px;
    height: 180px; 
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
    opacity: 0.5;
    &:hover{
        opacity: 0.9;
    }
    &:focus{
        opacity: 1;
        transform: scale(1.1);
    }
    
`;
const ButtonChange = styled.button`
     border: none;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #93BFCF;
    opacity: 0.5;
    &:hover{
        opacity: 0.9;
    }
    &:focus{
        opacity: 1;
        transform: scale(1.1);
    }
    `;




function Todo(item) {
    const todoSID = item.todo.id

    const todo = item.todo


    // payload로 보내기 
    const dispatch = useDispatch();



    const onClickDeleteHandler = (payload) => {
        dispatch(delete_to(payload))
        console.log(item.todo.id)
    }

    const onClickDoneHandler = (payload) => {
        dispatch(update_to(payload))
        console.log(item.todo.id)
    }

    const navigate = useNavigate();

    const onClickDeatilPage = () => {
        navigate(`/${item.todo.id}`, {
            state: item.todo
        })
    }


    return (
        <TodoContainer>

            <div>
                <p
                    style={{
                        textAlign: 'center'
                    }}
                    onClick={onClickDeatilPage}>상세 페이지</p>
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