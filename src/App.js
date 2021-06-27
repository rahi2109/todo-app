import React,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import Todo from'./Todo'
import db from './firebase'
import firebase from 'firebase';

function App() {
  const [todos,setTodos]=React.useState([]);
  const[input,setInput]=React.useState('');
  const addTodo=(event)=>{
    event.preventDefault();
    console.log("debug" ,input);
    db.collection('todos').add({
      todo:input,
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    // setTodos([...todos,input]);
    setInput('');




  }
  useEffect(()=>{
    console.log("Debug ",db.collection('todos'));
      db.collection('todos').orderBy('timeStamp','desc').onSnapshot(snapshot=>{
        console.log("Debug ")
        setTodos(snapshot.docs.map(doc=> ({id:doc.id,todo:doc.data().todo})))
      })
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
        <Todo todo={todo} />
      ))}

      </ul>
    </div>
  );
}

export default App;
