import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "black" }}>
                <div className="FooterContainer">
                    <div>
                        <p style={{color:"rgb(255, 204, 0)"}}>Regd. Office</p>
                        <p>1, Sona Roopa Apartment, Opp.Lal Bunglow, C. G. Road, Ahmedabad - 380 009</p>
                        <p><b>Phone:</b> <a href="tel:+917926405484">+91-7926405484</a> , <a href="tel:26406484">26406484</a> , <a href="tel:09909905484">099099 05484</a></p>
                        <p><b>Email:</b><a href="mailto:mittalsection@gmail.com">mittalsection@gmail.com</a></p>
                    </div>
                    <p>Copyright © 2024 <span style={{ color: "#ffcc00" }}>A B Mittal Group</span>, All Rights Reserved. <br/>Designed & Developed by : <Link to="https://www.outleadsolutions.com/" target="_blank">Outlead Solution</Link></p>
                </div>
            </section>
        </>
    )
}
export default Footer;

