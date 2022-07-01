import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/App/action';

const SingleBooks = () => {
   
    const {id} = useParams();
    const dispatch = useDispatch();
    const books = useSelector((state)=> state.App.books);
    const [ currentBook , setCurrentBook]= useState({});


      useEffect(()=>{
          if(books?.length === 0)
          {
            dispatch(getBooks())
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
    <div>
       
        <h2>{currentBook?.book_name}</h2>
        <div>{currentBook?.category}</div>
        <div>{currentBook?.no_of_chapters}</div>
        <div>{currentBook?.release_year}</div>
        <div>{currentBook?.author}</div>
        <button>
            <Link to={`/books/${currentBook.id}/edit`}>

            Edit
        </Link>
        </button>

    </div>
  )
}

export default SingleBooks