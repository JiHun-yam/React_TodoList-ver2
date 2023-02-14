import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Todo from './Todo/Todo';



const ListArea = styled.div`
    margin: 20px  auto;
    width: 90%;
    height: 37.5rem;
    background: #F4EAD5;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;
const ListInArea = styled.div`
    
    width: 100%;
    height: 100%;
    
`;

const ListTodoDoneWarp = styled.div`
   
    width: 100%;
    height: 50%;
    text-align: center;
`;
const ListItemTodo = styled.div`
        display: flex;
        gap: 20px;
        padding-left: 20px;
`


function List() {

    //  리덕스에서 데이터 받기 
    const data = useSelector((state) => {
        return state.todos
    })




    return (
        <ListArea>

            <ListInArea>

                <ListTodoDoneWarp>
                    <h2 style={{
                        paddingTop: '20px',
                    }}>하는중 ... 🤣</h2>
                    <ListItemTodo>
                        {
                            data.filter(item =>
                                item.isDone == false
                            ).map((item) => {
                                return (
                                    <Todo item={item} key={item.id} />
                                )
                            })
                        }
                    </ListItemTodo>

                </ListTodoDoneWarp>

                <ListTodoDoneWarp>
                    <h2>끝났다 ... 😆</h2>
                    <ListItemTodo>
                        {
                            data.filter(item =>
                                item.isDone == true
                            ).map((item) => {
                                return (
                                    <Todo item={item} key={item.id} />
                                )
                            })
                        }
                    </ListItemTodo>
                </ListTodoDoneWarp>

            </ListInArea>


        </ListArea >
    )
}

export default List