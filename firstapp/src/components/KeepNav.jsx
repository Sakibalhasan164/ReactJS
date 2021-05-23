import React from 'react';
import logo from "../images/keep.png"
import "../styles/keepNotes.css"


const Nav=()=>{
    return(
        <>
        <nav className="nav">
        <img src={logo} alt="Google keep"/>
        <h1 className="keep">Keep</h1>
        </nav>
        </>
    )
}

export default Nav;
