import React from 'react'
import styled from 'styled-components'
import Todo from './Todo';

const ListTitle = styled.h2`
    padding: 40px 0px 0px 15px;
`;





function List(data) {
    let todo = data.data





    return (
        <>
            <ListTitle>하는중...🚨</ListTitle>

            <div style={{
                display: " flex",
                gap: '20px'
            }}>
                {
                    todo.filter(item => item.isDone === false)
                        .map((todo) => {
                            return (
                                <Todo todo={todo} key={todo.id} />
                            )
                        })
                }</div>


            <ListTitle>끝  ⭕️</ListTitle>



            <div style={{
                display: " flex",
                gap: '20px'
            }}>
                {
                    todo.filter(item => item.isDone === true)
                        .map((todo) => {
                            return (
                                <Todo todo={todo} key={todo.id} />
                            )
                        })
                }</div>


        </>
    )
}

export default List