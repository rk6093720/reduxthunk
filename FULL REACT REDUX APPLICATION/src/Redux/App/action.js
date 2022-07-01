import axios from "axios";
import * as types from "./actionTypes";
// import axios from "axios"
// console.log(types)
// action object creator

const getBooks=(params)=>(dispatch) =>{
    dispatch({type:types.GET_BOOK_REQUEST});
    axios
    .get("/books", params)
    .then((r) => dispatch({ type:types.GET_BOOK_SUCCESS, payload:r.data }))
    .catch((e) => dispatch({type:types.GET_BOOK_FAILURE}));
}


 const updateBooks=(params) => (dispatch) => {
    dispatch({ type:types.UPDATE_BOOK_REQUEST});
    axios
    .patch("/books",params)
    .then((r) => dispatch({type:types.UPDATE_BOOK_SUCCESS , payload: r.data }))
    .catch((e) => dispatch({ type:types.UPDATE_BOOK_FAILURE}));
 }
// const getBookRequest=()=>{
//     return {
//         type:types.GET_BOOK_REQUEST
//     }
// }

// const getBookSuccess=(payload)=>{
//     return {
//         type:types.GET_BOOK_SUCCESS,
//         payload,
//     }
// }
// const getBookFailure=()=>{
//     return {
//         type:types.GET_BOOK_FAILURE
//     }
// }


// const addTodoRequest=()=>{
//     return {
//         type:types.ADD_TODOS_REQUEST
//     }
// }

// const addTodoSuccess=(payload)=>{
//     return {
//         type:types.ADD_TODOS_SUCCESS,
//         payload,
//     }
// }
// const addTodoFailure=()=>{
//     return {
//         type:types.ADD_TODOS_FAILURE
//     }
// }

export {
    getBooks,
    updateBooks,
}