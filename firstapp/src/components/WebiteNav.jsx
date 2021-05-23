import React from 'react';
import logo from "../images/logo.svg"
import "../styles/website.css"


const WebiteNav = () => {
    return (
        <>
        <nav className="nav">
        <div className="logo">
        <img src={logo} alt="nice"/> 
        </div>
         
        <div className="navItems">
        <h3 className="docs">Documentation</h3>
        <button className="signup">Sign UP</button>
        </div>

        </nav>       
        </>
    );
}

export default WebiteNav;
