import  { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id:String;
    title: string;
    completed: boolean
}

type TodosState = {
    list: Todo[]
}

const initialState: TodosState = {
    list:[]
}


const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addToodo(state, action:PayloadAction<object>){
            console.log(action.payload)
        },
    },
})


export const {addToodo} = todoSlice.actions

export default todoSlice.reducer