import React, { useEffect, useState } from 'react';


function App(){
     const [num, setnum] = useState(0)

useEffect(()=>{
    alert("hi")
},[num])

return(
         <>
        <button
        onClick={()=>setnum(num+1)}
        >Click {num}</button>
         </>)
}

export default App;