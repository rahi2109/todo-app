import React,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import Todo from'./Todo'
import db from './firebase'

function App() {
  const [todos,setTodos]=React.useState([]);
  const[input,setInput]=React.useState('');
  const addTodo=(event)=>{
    event.preventDefault();
    setTodos([...todos,input]);
    setInput('');
  }
  useEffect(()=>{
      // db.collection('todos')
  },[])
  return (
    <div className="App">
      <h1>Hello Anshuman</h1>
      <form>
      {/* <input onChange={event=>setInput(event.target.value)} value={input}/>
       */}
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input onChange={event=>setInput(event.target.value)} value={input}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add TODO
      </Button>
      
      
      </form>
      
      <ul>
      {todos.map(todo=>(
        <Todo text={todo} />
      ))}

      </ul>
    </div>
  );
}

export default App;
