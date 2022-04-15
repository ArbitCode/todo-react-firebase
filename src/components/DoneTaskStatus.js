import React from 'react'

export const DoneTaskStatus = (props) => {
    if(props.nDone === 0 && props.nTodo === 0){
        return(
            <h4>Please add some task.</h4>
        )
    }
    if(props.nDone === 0 && props.nTodo !== 0){
        return(
            <h4>Waiting! 🔭 Please complete some task.</h4>
        )
    }
      return (
          <h4>Done task: {props.nDone}</h4>
    )
  }
  