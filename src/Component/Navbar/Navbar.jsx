import React, { useState } from 'react'
import './Navbar.css'
import logo1 from '/images/logo1.png';
import { Link } from 'react-router-dom';
import { CgFormatJustify } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";

import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState);
  };
  return (

    <>
      <div className='navbar'>
        <Link to="/">
          <img src={logo1} alt="Logo" className='logo' />
        </Link>
        <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
          <ul className="navbar-menu">
            <Link to="/"><li onClick={toggleNav}>Home</li></Link>
            <Link to="/AboutUs"><li onClick={toggleNav}>About us</li></Link>
            <Link to="/Group"><li onClick={toggleNav}>Group Companies </li></Link>
            <Link to="Gallery"><li onClick={toggleNav}>Gallery</li></Link>
            <Link to="ContactUs"><li onClick={toggleNav}>Contact us</li></Link>
          </ul>
        </div>
        <button className="nav-toggler" onClick={toggleNav} style={{ borderRadius: "8px" }}>

          {isNavVisible ? <RxCross2 /> : <MdMenu />}

        </button>

      </div>
    </>
  )
}

export default Navbar
