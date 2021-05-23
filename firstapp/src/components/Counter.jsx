import React from 'react';
import "../incDec.css"

const Counter=(props)=>{
    const {values}=props 
    const check=(num)=>{
        return num===0?<span>Zero</span>:num
        }
          const add=()=>{
          console.log("add");
          values.setnumber(values.number+1)
          values.seterror("")
          }
          const sub=()=>{
       //using a turnary oparator
       values.number>0?values.setnumber(values.number-1)
       :values.seterror("Negetive number is not availabe")
       }
return(
<>
<div className="counter">

<h1>{check(values.number)}</h1>
<p style={{color:"red",}}>{values.error}</p>
<button onClick={add} style={{margin:"15px"}}>+</button>
<button onClick={sub}>-</button>
<button onClick={()=>{values.setnumber(0)}}>Reset</button>
</div>
</>
)
}

export default Counter;