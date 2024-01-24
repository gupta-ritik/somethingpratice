import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
// import Inter from @fon

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper-left">
         
        </div>
        <div className="wrapper-right">
          <a href="/" className='home'>HOME</a>
          <a href="/contactus" className='home'>CONTACT US</a>
        </div>
      </div>
  )
}
