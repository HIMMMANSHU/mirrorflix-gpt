import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Header';


const Body = () => {
  return (
    <div>
        <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default Body