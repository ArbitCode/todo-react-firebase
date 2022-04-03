import { FormControl, InputLabel, Button, Input } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import {db} from './confidential/firebase'
import firebase from 'firebase/compat/app';



function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapsot =>{
      setTodos(snapsot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input])
  
  const dateFormate = timestamp => {
    let date = new Date(timestamp);
    return (
        "Date: " + date.getDate() +
        "/" + (date.getMonth()+1) +
        "/" + (date.getFullYear()) +
        " " + (date.getHours()>12?date.getHours()-12:date.getHours()) +
        ":" + (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()) +
        " " + (date.getHours()>12?"PM":"AM")
    );
}
  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      todo : input,
      createdAt : dateFormate(firebase.firestore.Timestamp.now().toMillis()),
      timestamp : firebase.firestore.Timestamp.now()
    })
    setInput('');
  }

  return (
    <div className="app">
      <h1>React Todo</h1>
      <form>
        <FormControl>
          <InputLabel>Write a task here...</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
        </FormControl>
          <Button type='submit' onClick={addTodo} variant="contained" color='primary' disabled={!input}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(it=><Todo key={it.id} arr={it} />)}
      </ul>
    </div>
  );
}

export default App;
