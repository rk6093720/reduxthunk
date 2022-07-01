import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'
import { updateBooks } from '../Redux/App/action';

const EditBooks = () => {
   
    const {id} = useParams();
    const dispatch = useDispatch();
    const books = useSelector((state)=> state.App.books);
    const [ currentBook , setCurrentBook]= useState({});
     

    const handleEdit=()=>{
       dispatch( updateBooks(books.id));
    }

    const handleDelete=()=>{
      setCurrentBook()
    }

      useEffect(()=>{
          if(books?.length === 0)
          {
            dispatch(updateBooks())
          }
      },[books?.length, dispatch])


    useEffect(()=>{
       if(id){
        const temp = books?.find( book => book.id === Number(id));
        temp && setCurrentBook(temp);
       }
    },[books, id]);
    // console.log(currentBook);
  return (
    <div   key={currentBook.id}>
       
        <h2>{currentBook?.book_name}</h2>
        <div>{currentBook?.category}</div>
        <div>{currentBook?.no_of_chapters}</div>
        <div>{currentBook?.release_year}</div>
        <div>{currentBook?.author}</div>
        <button   onClick={handleEdit}>
          edit
        </button>
        <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default EditBooks