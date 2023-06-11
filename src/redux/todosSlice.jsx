import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: { items: [] },
    
    redusers: {
        addTodo(state, action) { },
        deleteTodo(state, action) { },
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;