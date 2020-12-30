import React from "react";

const TodoList =(props)=>{

  

    return (<>
    <div className="todo_style">
        <li className="hatch" 
        onClick={()=>{props.onSelect(props.id)}}>✖</li>
        <li className="name_text">{props.text}</li>
    
    {/* <i class="fa fa-times" aria-hidden="true"/> */}
    
    </div>
    </>
    )
}
export default TodoList;