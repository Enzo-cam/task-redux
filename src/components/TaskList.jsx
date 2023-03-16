import { useSelector } from "react-redux"
import {BsTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import { useDispatch } from "react-redux"
import { deleteTask, editTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

export default function TaskList() {

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Tasks {tasks.length}</h1>
        <Link to='/create'>
          Create a task
        </Link>
      </header>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>
            <BsTrashFill></BsTrashFill>
          </button>
          <Link to={`/edit/${task.id}`}>
            <AiFillEdit></AiFillEdit>
          </Link>
        </div>

      ))}
    </div>
  )
}
