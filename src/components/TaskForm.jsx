import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"

export default function TaskForm() {
  const dispatch = useDispatch()

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
    dispatch(addTask({
      ...task,
      id: uuid()
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" type="text" placeholder="title" />
      <textarea onChange={handleChange} name="description" placeholder="Describe your task"></textarea>
      <button>Save</button>
    </form>
  )
}
