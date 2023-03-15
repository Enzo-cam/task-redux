//Funciones que se haran dentro del estado
//Crear, eliminar, updatear, listar.

import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [], //Indica el valor inicial con el cual arrancará nuestro state
    reducer:{ //Donde nos encargamos de crear funciones que actualicen al ESTADO.

    }
})

export default taskSlice.reducer