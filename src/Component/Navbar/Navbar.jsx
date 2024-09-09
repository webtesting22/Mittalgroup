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
          <img src={logo1} alt="Logo" className='MittalLogo' />
        </Link>
        <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
          <ul className="navbar-menu">
          <li onClick={toggleNav}><Link to="/">Home</Link></li>
            <li onClick={toggleNav}><Link to="/AboutUs">About us</Link></li>
            <li onClick={toggleNav}><Link to="/Group">Group Companies </Link></li>
           <li onClick={toggleNav}> <Link to="Gallery">Gallery</Link></li>
           <li onClick={toggleNav}> <Link to="ContactUs">Contact us</Link></li>
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
