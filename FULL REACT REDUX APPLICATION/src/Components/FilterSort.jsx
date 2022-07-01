import React, {useState} from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { getBooks } from '../Redux/action';

const FilterSort = () => {
    const dispatch=useDispatch();
    const [searchParams, setSearchParams]=useSearchParams();
     const urlCategoryv=searchParams.getAll('category');
     const  urlSort = searchParams.getAll('sortBy');
    //  console.log(urlCategoryv,urlSort)
    const [category,setCategory]= useState(urlCategoryv || []);
    const [sortBy, setSortBy]=useState( urlSort[0] || '');
   
    const handleCheckbox=(e)=>{
        const option= e.target.value;
        let newCategory=[...category];
        if(category.includes(option))
        {
         newCategory.splice(newCategory.indexOf(option),1)
        }
        else{
            newCategory.push(option)
        }
        setCategory(newCategory)
        // if the option is already present then remove it, else add it 
    };

    const handleSort =(e)=>{
        setSortBy(e.target.value)
    }
    useEffect(()=>{
           if(category || sortBy){
            let params={};
            category && (params.category = category);
            sortBy && (params.sortBy = sortBy);
            setSearchParams(params)
            //   dispatch(getBooks({params:{category}}))
           }
    },[category,sortBy ,dispatch, setSearchParams])

  
        // let getBooksParams={
        //     params:{
        //         category:searchParams.getAll('category'),
        //         _sort:"release_year",
        //         _order:sortBy,
        //     },
        // };
        // console.log(getBooksParams);
        
    //     setSearchParams(params);
    //     dispatch(getBooks(getBooksParams))
    //   }
    // },[searchParams, dispatch, setSearchParams, sortBy])
    // console.log(sortBy);/
  return (
    <div>
        <h3>Filter</h3>
        <div  >
            <div>
                <input type="checkbox"
                 onChange={handleCheckbox} 
                 value="Novel" 
                 defaultChecked ={category.includes('Novel')}/>
                <label >Novel</label>
            </div>
            <div>
                <input type="checkbox"
                onChange={handleCheckbox} 
                value="Science_Fiction" 
                defaultChecked ={category.includes('Science_Fiction')} />
                <label>Science_Fiction</label>
            </div>
            <div>
                <input type="checkbox"
                 onChange={handleCheckbox} 
                 value="Motivational" 
                 defaultChecked ={category.includes('Motivational')}/>
                <label >Motivational</label>
            </div>
            <div>
                <input type="checkbox"  
                onChange={handleCheckbox}
                 value="Thriller" 
                 defaultChecked ={category.includes('Thriller')} />
                <label >Thriller</label>
            </div>
        </div>
        <h3>Sort</h3>
        <div  onClick={handleSort}>
            <input type="radio"
             value="asc" 
             name='sortBy'
              defaultChecked={sortBy==="asc"}/>
              {" "}
              Ascending
            <input type="radio" 
            value="desc"
             name='sortBy'
              defaultChecked={sortBy==="desc"}/>
              {" "}
              Descending
        </div>
    </div>
  )
}

export default FilterSort