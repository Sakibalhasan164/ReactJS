import React, { useState } from 'react';
import "../styles/keepNotes.css"


const Form=(props)=>{
    //the props of the form
    const {setnote,notesArray}=props


     const [display, setdisplay] = useState(false)
     const [titleInput, settitleInput] = useState("");
     const [textAreaInput, settextAreaInput] = useState("");

      function titleInputHandler(e){
         const value=e.target.value
         settitleInput(value)
      }
      function textAreaInputHandler(e){
          const value=e.target.value
          settextAreaInput(value)
      }
      function sumbitHandler(e){
          e.preventDefault()
          if(titleInput !== "" &&textAreaInput !== ""){
          setnote([
              ///the previous array
              ...notesArray,
              {title:titleInput,body:textAreaInput,id:Date.now()}
          ])
          setdisplay(false)
        }
        settitleInput("")
        settextAreaInput("")
      }


    return(
        <>
        
        <form onSubmit={sumbitHandler}>
        <input
        className="input"
        type="text" 
        placeholder="Title"
        onClick={()=>{setdisplay(true)}}
        onChange={titleInputHandler}
        value={titleInput}
        /> 
        <textarea 
        placeholder="Take a Note" 
        name="" id=""
        cols="30"
        rows="10"
        style={{display:display?"block" :"none"}}
        onChange={textAreaInputHandler}
        value={textAreaInput}
        >
        
        </textarea>
        <input 
        type="submit"
         className="submit" 
         value="Add"
         style={{display:display?"block" :"none"}}
        />
        </form>
        </>
    )
}

export default Form;
