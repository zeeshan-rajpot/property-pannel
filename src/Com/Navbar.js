import React from 'react'
// import './navbar.css'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <header className="site-navbar" role="banner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-11 col-xl-2">
          <h1 className="mb-0 site-logo">
            <NavLink to="/" className="text-Black mb-0">
              Brand
            </NavLink>
          </h1>
        </div>
        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav
            className="site-navigation position-relative text-right"
            role="navigation"
          >
            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li className="active">
                <NavLink to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/">
                  <span>Listings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/countact">
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
          style={{ position: "relative", top: 3 }}
        >
          {/* <NavLink to="/Blog" className="site-menu-toggle js-menu-toggle text-white">
            <span className="icon-menu h3" />
          </NavLink> */}
        </div>
      </div>
    </div>
  </header>
  {/* <div
    className="hero"
    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
  /> */}
</>

  )
}

export default Navbar
