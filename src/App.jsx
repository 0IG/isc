import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import PageNotFound from './components/page-not-found/PageNotFound'
export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>      
      </Routes>
    </div>
  )
}