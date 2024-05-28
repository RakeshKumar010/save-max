import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/globle/Navbar'
import Footer from '../components/globle/Footer'
import FooterContact from '../components/globle/FooterContact'

const Layout = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        <FooterContact/>
    </BrowserRouter>
  )
}

export default Layout