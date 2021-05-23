import React from 'react';
import {NavLink} from "react-router-dom"


const Nav=()=>{
    
    return(
      <>
      <NavLink  to="/" >Home</NavLink>
      <br/>
      <NavLink to="/about">About</NavLink>
      <br></br>
      <NavLink to="/user/sakib">User</NavLink>
      <br/>
      <NavLink to="/search">Search</NavLink>
      
     </>
)
}

export default Nav;