import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const DIV = styled.div`
    height: 100vh;
`

const DetailContainer = styled.div`

    border-radius: 30px;
    width: 450px;
    height: 400px;
    justify-content: space-between;
    margin: 100px auto;
    background: #DAE2B6;
    
    
`;
const DetailInContainer = styled.div`
    width: 80%;
    height: 15%;

    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const GObackButton = styled.button`
     width: 120px;
     height: 50px;
     border: none;
     border-radius: 25px;
     background: #DAE2B6;
     font-size: 1.15rem;
     font-weight: 600;
     &:hover{
     background: #FA7070;;
     }

`;

const DetailBodyArea = styled.div`
    margin: 10px auto;
    width: 80%;
    height: 70%;

    text-align: center;
`

const DetailTodoTitle = styled.h2`
    text-align: center;
    width: 100%;
    height: 20%;
`;
const DetailTodoBody = styled.p`
    width: 100%;
    height: 20%;
    text-align: center;

`;
const DetailisDone = styled.span`
    width: 100%;
    text-align: center;
`

function Detail() {
    const { state } = useLocation();
    console.log(state)

    const navigate = useNavigate();

    //버튼을 누르면
    const onClickDeatilPage = () => {
        // 네이게이션으로  험으로 돌아가라 
        navigate('/')
    }


    return (
        <DIV>
            <DetailContainer>

                <DetailInContainer>

                    <h2>iD: {state.id}번</h2>
                    <GObackButton onClick={onClickDeatilPage}> ✈️Go Main </GObackButton>

                </DetailInContainer>



                <DetailBodyArea>

                    <DetailTodoTitle>{state.title}</DetailTodoTitle>
                    <DetailTodoBody>{state.body}</DetailTodoBody>
                    <DetailisDone> 성공여부 :
                        {
                            state.isDone === true ? ' 성공' : ' 도전중'
                        }
                    </DetailisDone>
                </DetailBodyArea>




            </DetailContainer>
        </DIV>
    )
}

export default Detail