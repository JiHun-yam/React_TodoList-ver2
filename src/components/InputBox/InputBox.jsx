import React from 'react'
import styled from 'styled-components'

export default function InputBox() {


    const HeaderInputBoxForm = styled.form`
      background: #D7E9B9;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
 `


    return (
        <form>
            <div>

                <label>Title</label>
                <input />
                <label>body</label>
                <input />
            </div>

            <button className="add-button">추가하기</button>

        </form >
    )
}
