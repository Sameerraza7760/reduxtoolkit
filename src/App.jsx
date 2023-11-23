
import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo,removeTodo,ubdateTodo,removeallTodo } from './features/todo/todoSlice'


 

function App() {
  const todos=useSelector((state)=>state.todo.todos)
  const dispatch=useDispatch()


  const handleAddTodo = () => {
    const text = prompt("Enter a new todo:");
    if (text) {
      dispatch(addTodo( {text} ));
    }
  };


  const handleUpdateTodo=(id)=>{

    const text=prompt("enter a value")
  if (text) {
    dispatch(ubdateTodo({ id, text }));
  } 
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    // console.log(id);
  };

  const removetodo=()=>{
    dispatch(removeallTodo())
  }

  return (
    <div>
    <h2>Todo List</h2>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={removetodo} >Remove all todo</button>
    <ul>
    {todos.length === 0 ? (
        <p>No todos to display.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
            </li>
          ))}
        </ul>
      )}
    </ul>
  </div>
);
};
  


export default App