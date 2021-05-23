import React, { useEffect, useState } from 'react';
import Nav from "./RouterNav"



const About=()=>{
   const [imgSrc, setimgSrc] = useState("")
   const [term, setterm] = useState("")
   console.log(term);

   useEffect(()=>{
    const url=`https://source.unsplash.com/300x200/?${term}`
    setimgSrc(url)
},[term])   


    return(
      <>
      <Nav></Nav>
      <h1>Search a image</h1>
      <img src={imgSrc} alt="Image"/>
      <br/><br/>
      <input type="text" onChange={(e)=>{setterm(e.target.value)}}/>      
</>)
}

export default About;