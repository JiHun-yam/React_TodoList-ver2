import React from 'react'
import { useLocation, } from 'react-router-dom'


function TodeDetail() {

    // Props된것들
    const { state } = useLocation();
    console.log(state)
    return (
        <div>
            <div>{state.id}
                {state.title}
                {state.body}</div>
        </div>
    )
}

export default TodeDetail