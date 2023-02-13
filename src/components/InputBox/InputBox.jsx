import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { add_to } from '../../redux/modules/todos'


const HeaderInputBoxForm = styled.form`
background: #D7E9B9;
border-radius: 12px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px;
gap: 20px;
`;

const InputGround = styled.div`
  display: flex;
align-items: center;
gap: 20px;
`;


const AddInput = styled.input`
 border: none;
border-radius: 12px;
height: 40px;
padding: 0 12px;
width: 240px;
&:focus{
    background: #eee;
    border: none;
}
`;

const FormLabel = styled.label`
     background: #FFFBEB;
padding-top: 12px;
padding-bottom: 12px;
padding-left: 20px;
padding-right: 20px;
font-size: 16px;
font-weight: 700;
border-radius: 25px;
`;

const AddButton = styled.button`
border: none;
height: 40px;
border-radius: 10px;
background-color: teal;
width: 140px;
color: #fff;
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
    // 리덕스로 값전달
    const dispatch = useDispatch();

    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const onChangTitleHandler = (e) => {
        setTitle(e.target.value);

    }

    const onChangbodyHandler = (e) => {
        setBody(e.target.value);
    }



    const onSubmitButtonHandler = (e) => {
        e.preventDefault()


        if (title !== '' && body !== '') {

            dispatch(add_to(title, body));
           
            setTitle('');
            setBody('');
        }


    }

    return (
        <HeaderInputBoxForm onSubmit={onSubmitButtonHandler} >
            <InputGround>

                <FormLabel>Title</FormLabel>
                <AddInput
                    value={title}
                    onChange={onChangTitleHandler}
                />
                <FormLabel>body</FormLabel>
                <AddInput
                    value={body}
                    onChange={onChangbodyHandler} />
            </InputGround>

            <AddButton>추가하기</AddButton>

        </HeaderInputBoxForm >
    )
}


export default InputBox
