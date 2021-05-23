import React, { useEffect, useState } from 'react';
import Nav from "./components/KeepNav"
import Form from "./components/KeepForm"
import Note from "./components/Notes"

const KeepNotes=()=>{
   
const [note, setnote] = useState([]);
const saveToLocal=()=>{
    localStorage.setItem("note",JSON.stringify(note))
}
const getItems=()=>{
  const items=JSON.parse(localStorage.getItem('note'))  
  if(items.length===0){
      setnote([])
  }else{setnote(items)}
}

useEffect(()=>{getItems()},[])

useEffect(()=>{
    saveToLocal()
},[note])

   
return(
    <>
    <div className="wraper">
    
     <Nav/>
     <Form setnote={setnote} notesArray={note}/>
     <div className="noteDiv">
     {note.map(notes=><Note key={notes.id} notes={notes} setnote={setnote} notesArray={note}  />)}
     
     </div>
     </div>
    </>
    )
}

export default KeepNotes;

