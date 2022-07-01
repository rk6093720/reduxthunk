import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Books from './Books'
import EditBooks from './EditBooks'
import SingleBooks from './SingleBooks'
import RequireAuth from '../Components/RequireAuth'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Books/>}/>
            <Route path="/books/:id" element={<SingleBooks/>} />
            <Route path="/books/:id/edit" 
            element={
            <RequireAuth>
                <EditBooks/>
            </RequireAuth>}
             />
            <Route path="/login"  element={<Login/>}/>
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>

    </div>
  )
}

export default MainRoutes