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
    <div className="w-4/6">
      <header className="flex justify-between items-center w-4/12 mx-auto py-4 mb-4">
        <h1 className="text-xl">Tasks to do: {tasks.length}</h1>
        <Link to='/create' className="bg-orange-600 py-1 px-2 font-semibold rounded-sm">
          Create a task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3 w-8/12 mx-auto">
        {tasks.map(task => (
          <div key={task.id} className="bg-white text-black p-2 rounded-md">
            <header className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <div className="flex items-center gap-2">
                <Link to={`/edit/${task.id}`}>
                  <AiFillEdit></AiFillEdit>
                </Link>
                <button className="text-red-600" onClick={() => handleDelete(task.id)}>
                  <BsTrashFill></BsTrashFill>
                </button>
              </div>
            </header>
            <p className="mb-2">{task.description}</p>
          </div>

        ))}
      </div>
    </div>
  )
}
