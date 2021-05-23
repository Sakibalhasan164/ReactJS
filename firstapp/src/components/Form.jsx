import React, { useState } from "react"


const Form=(prop)=>{
    const {settodo,settodoInput,input,todo}=prop
    const [eror, seteror] = useState("")
 const submitHandler=(e)=>{
     e.preventDefault()
     if(input !==""){
         seteror("")
         settodo([
         ...todo,
         {text:input,completed:false,key:Date.now()}
     ])
    }else{
        seteror("please enter a Todo")
        
    }
    
    settodoInput("")
     console.log(todo);
 }
const inputHandler=(e)=>{
   const value=e.target.value
   settodoInput(value)
}
return(
<>
<form onSubmit={submitHandler}>
<input type="text"
onChange={inputHandler} 
placeholder="enter a todo"
value={input}
 />
<input
 type="submit" value="Add"
/>
<p style={{color:"red"}}>{eror}</p>
</form>
</>

)
}

export default Form;