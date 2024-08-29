import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar= ()=>{
    const navItemStyle = {
        marginRight: '2px',
        padding: '15px',
        
    };
    return(
        <>
        <div className="Navbar" >
        <NavLink exact activeClassName="active_class" to='/' style={navItemStyle}> Home</NavLink>
        <NavLink exact activeClassName="active_class" to='/about' style={navItemStyle}> About Us</NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/contact' style={navItemStyle}> Contact us</NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/gallery' style={navItemStyle}> Gallery</NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/group' style={navItemStyle}> Group companies</NavLink>

        
      </div>
        
        </>
    );
};
export default Navbar;