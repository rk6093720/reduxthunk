import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/action';
// import { getTodos } from '../Redux/action';
const TodoInput = () => {
  const dispatch=useDispatch();
  const [ title, setTitle]= useState("");
  
  const handleAdd=()=>{
    const payload={
      title,status:false
    }
    setTitle("")
    dispatch(addTodoRequest())
    axios
    .post("/todos",payload)
    .then((r) =>  dispatch(addTodoSuccess(r.data)))
    // .then(()=>dispatch(getTodos()))
    .catch((e)=> dispatch(addTodoFailure(e)));
  }
  return (
    <div>
    <h3>TodoInput</h3>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput