import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React, { useState } from "react";
import { db } from '../confidential/firebase';
import './DoneTask.css'
import Avatar from '@material-ui/core/Avatar';
import { Checkbox } from '@mui/material';
import firebase from 'firebase/compat/app';
import {DATABASE_TABLE} from '../conn/ConnInfo.js'


export const DoneTask = ({task})=>{
    const [checked, setChecked] = useState(true)
    
    const setCheckBox = (event) => {
        setChecked(event.target.checked)
        db.collection(DATABASE_TABLE).doc(task?.id).update({isChecked:!checked}, {timestamp:firebase.firestore.Timestamp.now()})   
    }

    return (
        <List className="donetask__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <DeleteForever  fontSize='large' onClick = {()=> {db.collection(DATABASE_TABLE).doc(task?.id).delete()}}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={task?.item?.todo} secondary={task?.item?.createdAt}/>
                <Checkbox checked={checked} onChange={setCheckBox} inputProps={{'aria-label':'controlled'}}/> 
            </ListItem>
        </List>
    )
}