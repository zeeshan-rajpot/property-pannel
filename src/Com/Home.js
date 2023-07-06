import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div
    className="hero"
    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
  />
    </>
  )
}

export default Home
