import { List, ListItem, ListItemAvatar, ListItemText,} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons/';
import React from "react";
import { db } from '../confidential/firebase';
import './DoneTask.css'
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import firebase from 'firebase/compat/app';



var DATABASE = "todos"


export const DoneTask = ({arr})=>{
    const [checked, setChecked] = useState(true)
    let doneTaskList = arr.item.isChecked?arr: {};

    const setCheckBox = (event) => {
        setChecked(event.target.checked)
        db.collection(DATABASE).doc(doneTaskList?.id).update({isChecked:!checked}, {timestamp:firebase.firestore.Timestamp.now()})   
    }

    return (
        <List className="donetask__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={doneTaskList?.item?.todo} secondary={doneTaskList?.item?.createdAt}/>
                <DeleteForever fontSize='large' onClick = {()=> {db.collection(DATABASE).doc(doneTaskList?.id).delete()}}/>
                <Checkbox checked={checked} onChange={setCheckBox} inputProps={{'aria-label':'controlled'}}/> 

            {/* <> {isTaskDone(checked)}</> */}
            </ListItem>
        </List>
    )
}