import React from 'react'
import Header from '../components/Header'
import NewProject from '../components/NewProject'
import WhyChoose from '../components/WhyChoose'
import About from '../components/About'
import Brands from '../components/Brands'

const Home = () => {
  return (
    <>
        <Header/>
        <NewProject/>
        <WhyChoose/>
        <About/>
        <Brands/>
    </>
  )
}

export default Home