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
                        <p><b>Ph:</b> +91 79 26405484, 26406484, <b>Fax:</b> +91 79 26465484, <b>Mo:</b> 099099 05484</p>
                    </div>
                    <p>Copyright © 2024 <span style={{ color: "#ffcc00" }}>A B Mittal Group</span>, All Rights Reserved. Designed & Developed by : <Link to="https://www.outleadsolutions.com/" target="_blank">Outlead Solution</Link></p>
                </div>
            </section>
        </>
    )
}
export default Footer;

