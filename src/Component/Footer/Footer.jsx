import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "black" }}>
                <div className="FooterContainer">
                    <p>Copyright © 2024 <span style={{color:"#ffcc00"}}>A B Mittal Group</span>, All Rights Reserved. Designed & Developed by : <Link to="https://www.outleadsolutions.com/" target="_blank">Outlead Solution</Link></p>
                </div>
            </section>
        </>
    )
}
export default Footer;

