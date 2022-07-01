import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import BookList from '../Components/BookList'
import FilterSort from '../Components/FilterSort'
// import { getBooks } from '../Redux/action'
import styled from 'styled-components'
// import { useSearchParams } from 'react-router-dom'
const Books = () => {
//     const [searchParams] = useSearchParams();
//     const dispatch=useDispatch();
//     const books= useSelector(state => state.books) 
   
//     useEffect(()=>{
//         const urlCategory= searchParams.getAll("category");
//         const urlSort = searchParams.getAll('sortBy')
//         if(books.length === 0 && (!urlCategory || !urlSort))
//         {
//    dispatch( getBooks());
//         }
//     },[])
    // console.log(books)
  return (
    <div>
      <h1>Books</h1>
      <BookPageWrapper>
        <FilterSortWrapper>
       <FilterSort/>
       </FilterSortWrapper>
       <BookListWrapper>
       {/* <BookList  books={books}/> */}
       <BookList/>
       </BookListWrapper>
       
       </BookPageWrapper>
    </div>
  )
}

export default Books;

const BookPageWrapper= styled.div`
display:flex;
`
const FilterSortWrapper = styled.div`
   width:300px;
   border:2px solid red;


`
const BookListWrapper= styled.div`
   border:2px solid black;
   width:100%;
   display:grid;
  grid-template-columns: repeat(auto-fit, minmax(310px,max-content));
  grid-gap:15px;
  justify-content:center;
  padding:initial;
`