//Todo컴포넌트

import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { delete_to, update_to } from '../../../redux/modules/todos';
import { useNavigate } from 'react-router-dom';

const TodoContainer = styled.div`
    width: 240px;
    height: 180px; 
    background: #FFFBEB;
    border-radius: 12px;
    padding: 12px 24px 24px 12px;
    transition: all 0.2s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
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
    opacity: 0.6;
    &:hover{
        opacity: 1;
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
    opacity: 0.6;
    &:hover{
        opacity: 1;
    }
    &:focus{
        opacity: 1;
        transform: scale(1.1);
    }
    `;



function Todo(item) {



    const dispatch = useDispatch()

    const onClickDeleteHandler = (payload) => {
        dispatch(delete_to(payload))
    }

    const onClickDoneHandler = (payload) => {
        dispatch(update_to(payload))
    }

    const navigate = useNavigate();

    const onClickDeatilPage = () => {
        navigate(`/${item.item.id}`, {
            state: item.item
        })
    }

    return (
        <TodoContainer>
            <p onClick={onClickDeatilPage}>상세보기</p>
            <Todo_title>{item.item.title}</Todo_title>
            <span>{item.item.body}</span>
            <ButtonList>
                <ButtonDelete onClick={() => onClickDeleteHandler(item.item.id)}>삭제</ButtonDelete>
                <ButtonChange onClick={() => onClickDoneHandler(item.item)}>
                    {item.item.isDone == false ? '성공' : '재도전'}
                </ButtonChange>
            </ButtonList>
        </TodoContainer>
    )
}

export default Todo