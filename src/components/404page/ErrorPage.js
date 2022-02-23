import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    let navigate = useNavigate();
    const handleOnclick=()=>{
        navigate('/')
    }
    return (
        <>
            <h3>
                404  Page Not Found
            </h3>
            <p>You are in a Wroung URL <span onClick={()=>handleOnclick()} style={{color:"blue",cursor:"pointer"}}>Click Here</span> for move to home page</p>
        </>
    )
}
export default ErrorPage;