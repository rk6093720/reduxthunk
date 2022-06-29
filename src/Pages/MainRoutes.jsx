
import React from 'react'

import {  Route , Routes} from "react-router-dom";
import SingleTodo from './SingleTodo';
import Todos from './Todos';
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todos/>}/>
          <Route path="/:id" element={<SingleTodo/>}/>
    </Routes>
  )
}

export default MainRoutes