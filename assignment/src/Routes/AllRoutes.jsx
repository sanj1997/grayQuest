import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import SingleUserPage from '../Pages/SingleUserPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<SingleUserPage/>}/>
    </Routes>
  )
}

export default AllRoutes