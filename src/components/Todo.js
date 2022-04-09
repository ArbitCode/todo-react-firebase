import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './Todo.css'
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
var DATABASE = "todos"


export const Todo = ({arr})=>{
    const [checked, setChecked] = useState(false)

    const setCheckBox = (event) => {
        setChecked(event.target.checked)
        db.collection(DATABASE).doc(arr.id).update({isChecked:!checked})   
    }

    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={arr.item.todo} secondary={arr?.item?.createdAt}/>
                <Checkbox checked={checked} onChange={setCheckBox} inputProps={{'aria-label':'controlled'}}/>
            </ListItem>
        </List>
    )
}