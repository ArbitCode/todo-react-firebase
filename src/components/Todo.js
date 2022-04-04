import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './Todo.css'
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

export const Todo = ({arr})=>{
    
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={arr.item.todo} secondary={arr?.item?.createdAt}/>
            <DeleteForever fontSize='large' onClick = {()=> {db.collection('todos').doc(arr.id).delete()}}/>
            </ListItem>
        </List>
    )
}