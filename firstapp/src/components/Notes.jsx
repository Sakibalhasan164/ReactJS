import React from 'react';
import "../styles/keepNotes.css"

const Notes=(props)=>{
    const {notes,setnote,notesArray}=props
    const deleteHandler=()=>{
        console.log(notes);
    setnote(notesArray.filter(el=>el.id !== notes.id))
    console.log(notes);
    }
    return(
        <>
        <div className="note">
        <h3>{notes.title}</h3>
        <p>{notes.body}</p>
        <button className="delete"
        onClick={deleteHandler}
        >Delete</button>

        </div>
      

        </>
        )
    }
export default Notes