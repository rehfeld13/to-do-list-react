import { ChangeEvent, FormEvent, useState } from 'react'

import { Task } from './Task'

import { PlusCircle } from 'phosphor-react'

import './ToDoList.css'

export function ToDoList(){

  const [tasks, setTasks]= useState<string[]>([]);

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('')
  }

  function handleNewTaskChange( event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task =>{
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }


  return(
    <article>

      <form onSubmit={handleCreateNewTask}>
        <input
        type="text"
        value={newTaskText}
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskChange}
        />
        <button type='submit'>
          Criar
          <PlusCircle />
        </button>
      </form>

      <div className="tasks">
        <header className="header-task">
          <div className="task-create">
            <h2>Tarefas criadas</h2>
            <span>{tasks.length}</span>
          </div>
        </header>

        <div className="taskList">
          {tasks.map(task =>{
            return(
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </div>
      </div>
    </article>


  )
}