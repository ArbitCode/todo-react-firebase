import { useState, useEffect } from 'react';
import './App.css';
import { ViewTodoTask } from './components/ViewTodoTask';
import {Dashboard} from './components/Dashboard';
import {db} from './confidential/firebase'
import { ViewDoneTask } from './components/ViewDoneTask';
import {DATABASE_TABLE} from './conn/ConnInfo.js'
import {Form} from './components/Form';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  
  useEffect(()=>{
    db.collection(DATABASE_TABLE).orderBy('timestamp', 'desc').onSnapshot(snapsot =>{
      setTodos(snapsot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input])

  let donetask = todos.filter((task) => task.item.isChecked === true)
  let todotask = todos.filter((task) => task.item.isChecked === false)
  
  return (
    <div className="app">
      <Dashboard/>
      <Form input={input} setInput={setInput}/>
      <h4>left task: {todotask.length}</h4>
      <ul>
      {todotask.map((element) => <ViewTodoTask key={element.id} task={element} />)}
      </ul>
      <h4>Completed task: {donetask.length}</h4>
      <ul>
      {donetask.map((element) => <ViewDoneTask key={element.id} task={element} />)}
      </ul>
    </div>
  );
}

export default App;
