import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState , useEffect} from 'react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
export const SwitchContext = createContext(null)


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodo , setFilterTodo] = useState([])
  const[switchTheme, setSwitch] = useState("dark")


useEffect(()=>{
  filterHandler();
 

},[todos,status])
  const filterHandler =()=>{
    switch(status){
      case "completed":
        setFilterTodo(todos.filter(todo=> todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter(todo=> todo.completed ===false));
        break;
      default:
        setFilterTodo(todos);
        break;



    }
  }

//switch Theme
const toggleSwitch = ()=>{
  setSwitch((current)=>current==="light" ?"dark":"light")
}


  return (
    <SwitchContext.Provider value={{switchTheme, setSwitch}}>
      <div className="App" id={switchTheme} >
      <header>
      <h1> TO DO TASKS </h1>
      
      </header>
     <div className='switch'>
      <label>{switchTheme ==="light" ?"Light Mode" :"Dark Mode"}</label>
      <ReactSwitch  class="switchButton"onChange={toggleSwitch}  checked={switchTheme==="dark"}/>
     {/* <ReactSwitch onChange={toggleSwitch} checked={switchTheme="dark"}/> */}
     </div>
      <div className='main'>

      <Form todos={todos} 
      inputText={inputText}
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
     
      />
      <TodoList  filterTodo ={filterTodo}
      todos={todos} setTodos={setTodos} />
      </div>
    </div>
    </SwitchContext.Provider>
  );
}

export default App;
