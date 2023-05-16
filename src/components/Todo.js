import React from 'react'
import {BsFillCheckCircleFill, BsTrash} from "react-icons/bs"

const Todo = ({text, todo,todos, setTodos}) => {
    const completeHandler = ()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item, completed:!item.completed
                }

            }

            return item;
        }))
    }
    
    
    const deleteHandler =(e)=>{
        setTodos(todos.filter(el=>el.id !== todo.id))

    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" :""}`}> {text}</li>
        <button onClick={completeHandler}className='complete-btn'>
            <BsFillCheckCircleFill    color="white" />

        </button>
        <button onClick={deleteHandler}className='trash-btn'>
            <BsTrash  color="red"/>

        </button>
    </div>
  )
}

export default Todo