//contain logout method 

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useHistory } from 'react-router-dom'
import '../index.css'

export const MainPage = () => {

    // const history = useHistory()
    const auth = useContext(AuthContext)
    const logOutHandler = event => {
        event.preventDefault()
        auth.logout()
        // history.push('/')
    }

    return(
        <>
            <h1>MainPage</h1>
            <a href="/" onClick = {logOutHandler}>- Logout- </a>
        </>
    )
}