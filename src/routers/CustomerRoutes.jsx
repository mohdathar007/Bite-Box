import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/Homepage'
import Restaurant from '../customer/pages/Restaurant/Restaurant'


const CustomerRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<Restaurant/>}/>
    </Routes>

    
  )
}

export default CustomerRoutes