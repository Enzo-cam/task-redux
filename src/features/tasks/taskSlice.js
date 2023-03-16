//Funciones que querramos llamar para ACTUALIZAR el estado
// import { useDispatch } from 'react-redux'
//Formas de las cuales traemos datos que estan DENTRO del estado.
// import { useSelector } from 'react-redux'

//Funciones que se haran dentro del estado
//Crear, eliminar, updatear, listar.
import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: "1",
        title: "First Task",
        description: "Description about the task.",
        completed: false
    },
    {
        id: "2",
        title: "Second Task",
        description: "Description about the task.",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState, //Indica el valor inicial con el cual arrancará nuestro state
    reducers:{ //Donde nos encargamos de crear funciones que actualicen al ESTADO.
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const deleteTask = state.find(task => task.id === action.payload)
            if(deleteTask) state.splice(state.indexOf(deleteTask), 1)
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload
            const taskToEdit = state.find(task => task.id === id)
            if(taskToEdit){
                taskToEdit.title = title
                taskToEdit.description = description
            }
        }
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions

export default taskSlice.reducer