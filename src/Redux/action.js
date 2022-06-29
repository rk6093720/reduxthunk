import * as types from "./actionTypes";
import axios from "axios"
// console.log(types)
// action object creator


const getTodoRequest=()=>{
    return {
        type:types.GET_TODOS_REQUEST
    }
}

const getTodoSuccess=(payload)=>{
    return {
        type:types.GET_TODOS_SUCCESS,
        payload,
    }
}
const getTodoFailure=()=>{
    return {
        type:types.GET_TODOS_FAILURE
    }
}

function getTodos(dispatch){
    dispatch(getTodoRequest())
    axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodoSuccess(r.data)))
    .then((e) => dispatch(getTodoFailure(e)))
}

const addTodoRequest=()=>{
    return {
        type:types.ADD_TODOS_REQUEST
    }
}

const addTodoSuccess=(payload)=>{
    return {
        type:types.ADD_TODOS_SUCCESS,
        payload,
    }
}
const addTodoFailure=()=>{
    return {
        type:types.ADD_TODOS_FAILURE
    }
}

export {
    getTodoRequest,
    getTodoSuccess,
    getTodoFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
    getTodos
}