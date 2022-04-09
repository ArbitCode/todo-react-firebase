import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './DoneTask.css'
import Avatar from '@material-ui/core/Avatar';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import {DATABASE_TABLE} from '../conn/ConnInfo.js'


export const DoneTask = ({arr})=>{
    const [checked, setChecked] = useState(true)
    let doneTaskList = arr.item.isChecked?arr: {};

    const setCheckBox = (event) => {
        setChecked(event.target.checked)
        db.collection(DATABASE_TABLE).doc(doneTaskList?.id).update({isChecked:!checked}, {timestamp:firebase.firestore.Timestamp.now()})   
    }

    return (
        <List className="donetask__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <DeleteForever fontSize='large' onClick = {()=> {db.collection(DATABASE_TABLE).doc(doneTaskList?.id).delete()}}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={doneTaskList?.item?.todo} secondary={doneTaskList?.item?.createdAt}/>
                <Checkbox checked={checked} onChange={setCheckBox} inputProps={{'aria-label':'controlled'}}/> 

            {/* <> {isTaskDone(checked)}</> */}
            </ListItem>
        </List>
    )
}