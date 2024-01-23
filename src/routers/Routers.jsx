import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Routers = () => {
  return (
    <Routes>
    <Route path='/*' element={<CustomerRoutes/>}/>
    </Routes>
    
  )
}

export default Routers;