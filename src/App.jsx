import './App.css'
//Funciones que querramos llamar para ACTUALIZAR el estado
import { useDispatch } from 'react-redux'
//Formas de las cuales traemos datos que estan DENTRO del estado.
import { useSelector } from 'react-redux'

function App() {

  const tasks = useSelector(state => state.tasks)
  console.log(tasks)
  
  return (
    <div className="App">
      Checking Reduxssssss
    </div>
  )
}

export default App
