import React from 'react'

export const TodoTaskStatus = (props) => {
    if(props.nTodo === 0 && props.nDone === 0){
        return;
    }
    if(props.nTodo === 0 && props.nDone !== 0){
        return(
            <h4>Congrats! 🏆 You have completed your task.</h4>
        )
    }
      return (
          <h4>Task: {props.nTodo}</h4>
    )
  }
  