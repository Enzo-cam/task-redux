import { useState } from "react"

export default function TaskForm() {
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
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" type="text" placeholder="title" />
      <textarea onChange={handleChange} name="description" placeholder="Describe your task"></textarea>
      <button>Save</button>
    </form>
  )
}
