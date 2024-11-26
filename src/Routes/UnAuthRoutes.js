import React from 'react'
import Login from '../Pages/Login';
import { Route,Routes } from 'react-router-dom';
const UnAuthRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Login/>}/>
    </Routes>
  )
}

export default UnAuthRoutes
