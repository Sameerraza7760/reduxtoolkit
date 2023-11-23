import { createSlice,nanoid } from "@reduxjs/toolkit";




const initialState={
    todos:[]
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const todo={
            id:nanoid(),
            text:action.payload.text,
           };
           state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        ubdateTodo:(state,action)=>{
            const { payload: updatedTodo } = action;
      const existingTodo = state.todos.find((todo) => todo.id === updatedTodo.id);
      if (existingTodo) {
        existingTodo.text = updatedTodo.text;
      }
        },
        removeallTodo:(state,action)=>{
            state.todos=[]
        }

    }

})


export const {addTodo,removeTodo,ubdateTodo,removeallTodo}=todoSlice.actions

export default todoSlice.reducer