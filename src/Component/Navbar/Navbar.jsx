import React from 'react'
import './Navbar.css'
import logo1 from '../../assets/images/logo1.png';
import { CgFormatJustify } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";




const Navbar = () => {
  
  return (
    <>
    <div className='navbar'>
      <img src={logo1} alt="Logo" className='logo'/>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About us</li>
        <li>Group </li>
        <li>Gallery</li>
        <li>Contact us</li>
      </ul>
      <div className="nav-btn">
        <CgFormatJustify name="menu-outline" className='nav-icon'/>
        <AiFillCloseSquare name="close-outline" className='close-outline nav-icon'/>
      </div>
    </div>
    </>
  )
}

export default Navbar
