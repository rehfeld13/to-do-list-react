import { useState } from 'react';

import { Trash } from 'phosphor-react';

import './Task.css'

interface TaskProps{
  content: string;
  onDeleteTask:(task: string) => void
}


export function Task({content, onDeleteTask}:TaskProps){

  const [buttonClicked, setButtonClicked] = useState(false)

  function handleDeleteTask(){
    onDeleteTask(content)
  }

  function handleCompletedTask(){
    if(buttonClicked === false){
      setButtonClicked(true)
    } else if(buttonClicked === true){
      setButtonClicked(false)
    }
  }

  return(
    <div className="task">
      <div className="content">
        <button onClick={handleCompletedTask} className={buttonClicked ? 'check' : 'noCheck'}></button>
        <p>{content}</p>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}