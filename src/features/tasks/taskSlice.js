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
        }
    }
})

export const {addTask} = taskSlice.actions

export default taskSlice.reducer