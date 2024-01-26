import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/Homepage'
import Restaurant from '../customer/pages/Restaurant/Restaurant'
import Navbar from '../customer/components/Navbar/Navbar'
import Cart from '../customer/pages/Cart/Cart'


const CustomerRoutes = () => {

  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<Restaurant/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>

    
  )
}

export default CustomerRoutes