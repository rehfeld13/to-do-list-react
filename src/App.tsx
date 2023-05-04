import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'

import './App.css'
import './global.css'

export function App() {
  return(
    <div>
      <Header />

      <div className='wrapper'>
        <ToDoList />
      </div>


    </div>
  )
}

