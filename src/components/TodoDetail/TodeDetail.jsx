import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';










function TodeDetail() {

    // 전체 사이즈 지정 
    const Container = styled.div`
     margin-top: 10px;
     max-width: 1200px;
     height: 800px;
     min-height: 800px;
     margin: 0px auto;
     margin-bottom: 100px;
     border: 10px solid gray;
    
`;

    const GotoMain = styled.button`
        text-align: center;
        padding: 20px 56px;
        border-radius: 25px;
        color: white;
        background:  #FA7070;
        border: none;
        
    `

    // Props된것들
    const { state } = useLocation();
    console.log(state)

    const navigate = useNavigate();

    const onClickDeatilPage = () => {
        navigate('/')
    }


    return (
        <Container>
            <div style={{
                textAlign: "center",
                padding: "50px 10px 10px 0px",

            }}> <h2> {state.id} 번호 </h2>
                <h3> 제목 : {state.title}  </h3>
                <h4> 내용 : {state.body} </h4>
                <GotoMain onClick={onClickDeatilPage}>dd</GotoMain>
            </div>

        </Container>
    )
}

export default TodeDetail