import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import MSLLogo from "/images/MittalLogo.png";
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "black", position: "sticky" }}>

                <Row>
                    <Col lg={12} xs={24}>
                        <div className='MSLFooterLogoContainer'>
                            <Link to="/"><img src={MSLLogo} alt="MSL Group Logo" /></Link>
                        </div>
                    </Col>
                    <Col lg={12} xs={24} style={{ display: "flex" }}>
                        <div className="footerLinksContainer">
                            <p className="footerPara"><i class='bx bxs-map' ></i><a href="https://maps.app.goo.gl/rfcWFEJZN66dkx7YA" target="_blank">1, Sona Roopa Apartment, Opp.Lal Bunglow, C. G. Road, Ahmedabad-380009</a></p>
                            <p className="footerPara"><i class='bx bxs-phone'   ></i><b>Phone:     </b> <a href="tel:07926465484">  079-26465484</a></p>
                            <p className="footerPara"> <i class='bx bx-envelope'  ></i><b>Email: </b><a href="mailto:info@mittalsections.com">info@mittalsections.com</a></p>
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

