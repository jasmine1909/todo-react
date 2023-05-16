import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos, filterTodo}) => {
    console.log(todos)
  return (
    <div className='todo-container'> 
    <ul className='todo-list'>
      {filterTodo.map(todo=>(
        <Todo  text={todo.text}
         setTodos={setTodos} 
         todo={todo}
         todos={todos}
          id={todo.id}/>
      ))}
    </ul>

    </div>
  )
}

export default TodoList