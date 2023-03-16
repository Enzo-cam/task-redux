import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function TaskForm() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tasks = useSelector(state => state.tasks)
  const params = useParams()

  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask(task))
    }else{
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }
    navigate('/')
  }

  useEffect(() => {
  if(params.id){
    setTask(tasks.find(task => task.id === params.id))
  }    
  }, [])
  

  return (
    <div>
      <Link to='/'>
        Go to Task List
      </Link>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={task.title} name="title" type="text" placeholder="title" />
      <textarea onChange={handleChange} value={task.description} name="description" placeholder="Describe your task"></textarea>
      <button type="submit">Save</button>
    </form>
    </div>
  )
}
