import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import React from "react";
import { db } from '../confidential/firebase';
import './Todo.css'
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import {DATABASE_TABLE} from '../conn/ConnInfo.js'


export const Todo = ({task})=>{
    const [checked, setChecked] = useState(false)

    const setCheckBox = (event) => {
        setChecked(event.target.checked)
        db.collection(DATABASE_TABLE).doc(task.id).update({isChecked:!checked})   
    }

    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={task.item.todo} secondary={task?.item?.createdAt}/>
                <Checkbox checked={checked} onChange={setCheckBox} inputProps={{'aria-label':'controlled'}}/>
            </ListItem>
        </List>
    )
}