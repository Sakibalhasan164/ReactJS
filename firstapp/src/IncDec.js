import React, { useState } from 'react';
import Counters from "./components/Counters.jsx"

const IncDec=()=>{

   const [number, setnumber] = useState(0)
   const [error, seterror] = useState("")
  return (
  <>
  <Counters number={number} setnumber={setnumber} error={error} seterror={seterror}/>   
  </>
)

}

export default IncDec;