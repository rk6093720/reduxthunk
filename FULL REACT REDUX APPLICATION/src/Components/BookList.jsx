import React,{useEffect} from 'react'
import BookCard from './BookCard'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks  } from '../Redux/App/action'
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
const BookList = () => {
    const dispatch=useDispatch();
        const books= useSelector(state => state.App.books) 
       const [searchParams] = useSearchParams();
       const location = useLocation();


        useEffect(()=>{
            // const urlCategory= searchParams.getAll("category");
            // const urlSort = searchParams.getAll('sortBy')
            if(books.length === 0 || location.search ) //&& (!urlCategory || !urlSort)
            {
                const sortBy= searchParams.get("sortBy")
                let getBooksParams={
                    params:{
                        category:searchParams.getAll('category'),
                        _sort:sortBy && "release_year",
                        _order:sortBy,
                    },
                };
       dispatch( getBooks(getBooksParams));
            }
        },[location.search])
  return (
      <>
      {books.length > 0 && 
      books.map((singleBooks) => {
                     return (
                       <BookCardWrapper key={singleBooks.id}> 
                   <Link to={`/books/${singleBooks.id}`}>    <BookCard  bookData={singleBooks}/> </Link>

                       </BookCardWrapper>
                     )
      })}
      </>
  )
}

export default BookList

const BookCardWrapper = styled.div`
  border:2px solid green;
  padding: 5px;
  width:310px;

`