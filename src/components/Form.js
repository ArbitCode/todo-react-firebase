import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { db } from '../confidential/firebase';
import { DATABASE_TABLE } from '../conn/ConnInfo';
import firebase from 'firebase/compat/app';
import { AddTask } from '@mui/icons-material';

export const Form = (props) => {
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
        db.collection(DATABASE_TABLE).add({
          todo : props.input,
          createdAt : dateFormate(firebase.firestore.Timestamp.now().toMillis()),
          timestamp : firebase.firestore.Timestamp.now(),
          isChecked : false
        })
        props.setInput('');
      }
  return (
    <div>
    <form>
        <FormControl >
          <TextField color="secondary" label="what is your plan..." value={props.input}  onChange={e => props.setInput(e.target.value)}/>
          </FormControl>
          <Button type='submit' onClick={addTodo} variant="contained" color='primary' size="medium" endIcon={<AddTask />} disabled={!props.input}>Enter</Button>
      </form>
      </div>
  )
}
