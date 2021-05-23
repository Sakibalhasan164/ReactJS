import React, { useState } from 'react';
import Counter from "./Counter"

const Counters=(props)=>{
    const {number,setnumber,error,seterror}=props 
    const [theCounter, settheCounter] = useState([
        {number:number,setnumber:setnumber, error:error,seterror:seterror,key:Date.now()}
    ]);

return(
<>
{
    theCounter.map(counter=><Counter key={counter.key} values={counter}/>)
}


</>
)
}
export default Counters;