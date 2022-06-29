
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoInput from '../components/TodoInput';
import { getTodos} from '../Redux/action';

const Todos = () => {
    const dispatch= useDispatch();
    const todos = useSelector((state) => state.todos)



 useEffect(()=>{
  if(todos?.length===0)
  {
      // getTodos(dispatch);
      dispatch(getTodos)
  }
        },[])
    console.log(todos);








  return (
   <div>
      <h1>todos</h1>
      <TodoInput getTodos={getTodos}/>
      {todos?.map((item)=>{
         return (
          <div key={item.id}>
         <div>{item.title}</div>
         <div>{item.status}</div>
         </div>
         )
      })}
    </div>
  )
}
// here list of todos
export default Todos
