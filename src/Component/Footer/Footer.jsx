import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import MSLLogo from "/images/MittalLogo.png";
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "black", position: "sticky" }}>
                {/* <div className="FooterContainer">
                    <div>
                        <div className='MSLFooterLogoContainer'>
                            <Link to="/"><img src={MSLLogo} alt="MSL Group Logo" /></Link>
                        </div>
                        <p style={{ color: "#9aa966" }}>Registered  Office</p>
                        <p className="footerPara"><i class='bx bxs-map' ></i><a href="https://maps.app.goo.gl/rfcWFEJZN66dkx7YA">1, Sona Roopa Apartment, Opp.Lal Bunglow, C. G. Road, Ahmedabad - 380 009</a></p>
                        <p className="footerPara"><i class='bx bxs-phone'   ></i><b>Phone:     </b> <a href="tel:9909905484">  9909905484</a> <i class='bx bx-envelope'  ></i><b>Email: </b><a href="mailto:MSLsection@gmail.com">MSLsection@gmail.com</a></p>                    </div>
                    <p>Copyright © 2024 <span style={{ color: "#9aa966" }}>MSL </span>, All Rights Reserved. <br />Designed & Developed by : <Link to="https://www.outleadsolutions.com/" target="_blank" style={{ color: "#ffa401" }}>OutLead Solutions</Link></p>
                    <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank" style={{ color: "#ffa401" }}>OutLead Solutions.</Link>All rights reserved. </p>
                </div> */}
                <Row>
                    <Col lg={12} xs={24}>
                        <div className='MSLFooterLogoContainer'>
                            <Link to="/"><img src={MSLLogo} alt="MSL Group Logo" /></Link>
                        </div>
                    </Col>
                    <Col lg={12} xs={24} style={{display:"flex"}}>
                        <div className="footerLinksContainer">
                            {/* <p style={{ color: "#9aa966" }}>Registered  Office</p> */}
                            <p className="footerPara"><i class='bx bxs-map' ></i><a href="https://maps.app.goo.gl/rfcWFEJZN66dkx7YA" target="_blank">1, Sona Roopa Apartment, Opp.Lal Bunglow, C. G. Road, Ahmedabad - 380 009</a></p>
                            <p className="footerPara"><i class='bx bxs-phone'   ></i><b>Phone:     </b> <a href="tel:9909905484">  9909905484</a></p>
                            <p className="footerPara"> <i class='bx bx-envelope'  ></i><b>Email: </b><a href="mailto:mittalsection@gmail.com">mittalsection@gmail.com</a></p>
                        </div>
                    </Col>
                </Row>
                <div className="copyrightText">
                    <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank" style={{ color: "#ffa401" }}>OutLead Solutions. </Link>All rights reserved.</p>
                </div>

            </section>
        </>
    )
}
export default Footer;

