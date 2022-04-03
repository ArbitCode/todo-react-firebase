import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './Todo.css'

export const Todo = ({arr})=>{
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar/>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo}/>
            </ListItem>
            <DeleteForever fontSize='large' onClick = {()=> {db.collection('todos').doc(arr.id).delete()}}/>
        </List>
    )
}