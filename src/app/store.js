import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'

//Si tenes varios archivos q comparten datos, el configureStore agrupa a todos en uno
//para ocuparlos en cualquier lugar.
export const store = configureStore({
    reducer:{
        tasks: taskReducer,
    }
})