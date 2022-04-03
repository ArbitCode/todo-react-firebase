import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './Todo.css'
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

export const Todo = ({arr})=>{
    
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
    
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={arr.item.todo} secondary={dateFormate(arr?.item?.timestamp?.toMillis())}/>
            <DeleteForever fontSize='large' onClick = {()=> {db.collection('todos').doc(arr.id).delete()}}/>
            </ListItem>
        </List>
    )
}