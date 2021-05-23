import React, { useState } from 'react';

function Todo(prop){
const {list,todos,settodo}=prop

const [line, setline] = useState(false);

const deleteHandler=()=>{
    
    console.log(list);
    settodo(todos.filter(el=>el.key !==list.key))
} 
const done=()=>{
    line?setline(false):setline(true)
}



return(
    <>
    <div className="todoList">
    <ul>
    <li style={{
    textDecoration: line?"line-through" :"none"
    }}>
    {list.text}
    
    </li>
    <button onClick={deleteHandler}>
    Delete
    </button>

    <button onClick={done}>✔</button>
    </ul>
    </div>
    </>
)
}

export default Todo;