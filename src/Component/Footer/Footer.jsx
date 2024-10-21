import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import MittalLogo from "/images/MittalLogo.png";
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "black" }}>
                <div className="FooterContainer">
                    <div>
                        <div className='MittalFooterLogoContainer'>
                            <Link to="/"><img src={MittalLogo} alt="Mittal Group Logo" /></Link>
                        </div>
                        <p style={{ color: "#9aa966" }}>Regd. Office</p>
                        <p><a href="https://maps.app.goo.gl/rfcWFEJZN66dkx7YA">1, Sona Roopa Apartment, Opp.Lal Bunglow, C. G. Road, Ahmedabad - 380 009</a></p>
                        <p><b>Phone:</b> <a href="tel:9909905484">9909905484</a> </p>
                        <p><b>Email:</b><a href="mailto:mittalsection@gmail.com">mittalsection@gmail.com</a></p>
                    </div>
                    <p>Copyright © 2024 <span style={{ color: "#9aa966" }}>Mittal Sections Limited</span>, All Rights Reserved. <br />Designed & Developed by : <Link to="https://www.outleadsolutions.com/" target="_blank">Outlead Solution</Link></p>
                </div>
            </section>
        </>
    )
}
export default Footer;

