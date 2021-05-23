import React from 'react';
import {useParams,useLocation,useHistory} from "react-router-dom"
import Nav from "./RouterNav"
const User=()=>{
    const {name}=useParams()
    const location=useLocation()
    let history=useHistory()
    console.log(history);
    function handleClick(){
      history.goBack()
    } 
   

    return(
      <>
      <Nav></Nav>
      <h2>Welcome {name}</h2>
      {
      location.pathname==="/user/sakib" 
      ?<button>Click</button>:null
      }
      <button onClick={handleClick}>Go Back</button>
</>)
}

export default User