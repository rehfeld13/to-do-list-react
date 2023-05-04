import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import './global.css'
import './App.css'

export function App() {
  return(
    <div>
      <Header />

      <div className='wrapper'>

        <div className='input'>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
              Criar
              <PlusCircle />
            </button>
          </form>
        </div>

        <main>

        </main>
      </div>


    </div>
  )
}

