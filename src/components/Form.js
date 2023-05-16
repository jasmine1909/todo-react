import React from 'react'
import {AiFillPlusSquare} from "react-icons/ai"

const Form = ({setInputText,filterTodo,todos,setTodos,inputText,setStatus}) => {

    const inputTextHandler = (e)=>{
        setInputText(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        setTodos([
            ...todos,
            {text:inputText, completed:false, id:Math.random()*100}
        ])
        setInputText("")

    }
    const statusHandler =(e)=>{
     setStatus(e.target.value)
    }
  return (
    <form>
      <div className='addInput'>
      <input value={inputText} placeholder='Your to do list....'
        onChange={inputTextHandler} type="text" className='todo-input' />
        <button onClick={submitHandler}>
         ADD 
        </button>
      </div>
        <div className='select'>
            <select onChange={statusHandler} name="todos" className='filter-todo'>
                <option value="all"> All</option>
                <option value="completed"> Completed</option>
                <option value="uncompleted"> Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form