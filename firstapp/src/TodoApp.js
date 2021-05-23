import React, { useState } from 'react'
import Todos from "./components/Todo"
import Form from "./components/Form"


function TodoApp(){
    const [todoInput, settodoInput] = useState("")
    const [todo, settodo] = useState([])
    ;
    return(
        <>
          <h2>My Todo's</h2>
          <Form 
           
           settodo={settodo}
           settodoInput={settodoInput}
           input={todoInput}
           todo={todo}
           />
           {
            todo.map(items=><Todos key={items.key} list={items} todos={todo} settodo={settodo} ></Todos>)   
           }
        </>
        
    )
}

export default TodoApp;
