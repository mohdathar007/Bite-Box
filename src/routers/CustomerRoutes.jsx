import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/Homepage'


const CustomerRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>

    
  )
}

export default CustomerRoutes