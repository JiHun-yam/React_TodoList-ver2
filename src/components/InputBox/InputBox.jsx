import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { add_to } from '../../redux/modules/todos';



const InputBoxArea = styled.div`
    background: #DAE2B6;
    width: 90%;
    height: 6rem;
    margin: 15px auto;
    border-radius: 25px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 5px, rgba(0, 0, 0, 0.01) 0px 5px 7px;
   
  
`;

const InputBoxForm = styled.form`
    
    width: 100%;
    height: 1rem;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
    transition: all 0.35s ease;

`;


const FormLabel = styled.label`
     background: #FFFBEB;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 25px;
`;

const InputGround = styled.div`
      display: flex;
    align-items: center;
    gap: 20px;
`


const AddInput = styled.input`
border: none;
border-radius: 12px;
height: 40px;
padding: 0 12px;
width: 240px;
&:focus{

border: none;
}
`;

const InputAddButton = styled.button`
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: white;
    font-weight: 700;
    opacity: 0.4;
    transition: all .25s ease;
    &:hover{
       opacity: 0.8;
    }
    &:focus{
        opacity: 1;
         transform: scale(1.1);
    }
`;


function InputBox() {

    // 값을 리덕스로 보내기 위한 훅 
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onChangeBodyHandler = (e) => {
        setBody(e.target.value)
    }

    const onSubmitInputBoxFrom = (e) => {
        e.preventDefault()
        if (title !== '' && body !== '') {
            // dispatch로 입력된 값 리덕스로 보내기 
            dispatch(add_to(title, body))
            // 값 비우기
            setTitle('')
            setBody('')
        }
        else {
            alert('제대로 입력해유 ~ ')
        }
    }








    return (
        <InputBoxArea>
            <InputBoxForm onSubmit={onSubmitInputBoxFrom}>
                <InputGround>
                    {/* input은 가져온것들  */}
                    <FormLabel>Title</FormLabel>
                    <AddInput
                        value={title}
                        onChange={onChangeTitleHandler} />
                    <FormLabel>body</FormLabel>
                    <AddInput
                        value={body}
                        onChange={onChangeBodyHandler} />


                    <InputAddButton>Add.</InputAddButton>
                </InputGround>
            </InputBoxForm>
        </InputBoxArea >
    )
}

export default InputBox