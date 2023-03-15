import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
//Funciones que querramos llamar para ACTUALIZAR el estado
import { useDispatch } from 'react-redux'
//Formas de las cuales traemos datos que estan DENTRO del estado.
import { useSelector } from 'react-redux'

function App() {

  return (
    <div className="App">
      <TaskList/>
      <TaskForm/>
    </div>
  )
}

export default App
