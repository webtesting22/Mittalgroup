import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "./MSLCommon.css"
import 'swiper/css';
import 'swiper/css/pagination';
// import SliderImage1 from "./Images/AboutSliderImages/MSL/angles.jpg"
// import SliderImage2 from "./Images/AboutSliderImages/MSL/roundbars.jpg"
// import SliderImage3 from "./Images/AboutSliderImages/MSL/channels.jpg";
// import SliderImage4 from "./Flatbar.webp"
import SliderImage1 from "/images/Product Images/Angle5.jpeg"
import SliderImage2 from "/images/Product Images/RoundBar1.jpeg"
import SliderImage3 from "/images/Product Images/Channel5.jpeg"
import SliderImage4 from "/images/Product Images/FlatBar2.jpeg"
const MSLHomeAbout = () => {
    const sections = [
        { title: "Flat Bars", image: SliderImage4, description: "Ideal for construction, fabrication, and manufacturing, our flat bars offer strength and versatility for a variety of applications." },
        { title: "Round Bars", image: SliderImage2, description: "Precision-engineered for durability, our round bars are perfect for machining, forging, and structural use." },
        { title: "Channels", image: SliderImage3, description: "Our steel channels provide excellent support and stability, commonly used in building frameworks and heavy-duty construction projects." },
        { title: "Angles", image: SliderImage1, description: "Sturdy and reliable, our steel angles are designed for structural support, reinforcement, and a wide range of other industrial applications." }
    ];

    // Set the default section to "Flat Bars"
    const [selectedSection, setSelectedSection] = useState(sections[0]);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
    const [isImageVisible, setIsImageVisible] = useState(true);
    // Handler for selecting a section
    const handleSectionClick = (section) => {
        setIsDescriptionVisible(false); // Hide description immediately
        setIsImageVisible(false); // Hide image immediately

        setTimeout(() => {
            setSelectedSection(section); // Change selected section
            setIsDescriptionVisible(true); // Show description after delay
            setIsImageVisible(true); // Show image after delay
        }, 10); // Delay in milliseconds (adjust as needed)
    };
    return (
        <>
            <section className="AboutUsContainer">
                <div >
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="LeftContentContainer"
                            //  data-aos="fade-up" data-aos-duration="1000"
                            >
                                <h2><span>B</span>ehind the Brand</h2>
                                <p>At MSL , we are not just steel manufacturers—we are innovators shaping
                                    the future of infrastructure. Founded in 2006, we are proud to lead the steel manufacturing
                                    industry in Gujarat with a commitment to quality, sustainability, and innovation. Our mission
                                    is to deliver world-class products and services that meet the diverse needs of our clients and
                                    contribute to the growth of our partners.
                                </p>
                                <br />

                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {sections.map((section, index) => (
                                        <li
                                            className="accordionListItem"
                                            key={index}
                                            onClick={() => handleSectionClick(section)}
                                            style={{
                                                backgroundColor: selectedSection.title === section.title ? "" : "white",
                                            }}
                                        >
                                            <div className="titleContainer">
                                                <h3>{section.title}</h3>
                                                <i className='bx bx-chevron-down'></i>
                                            </div>
                                            {selectedSection.title === section.title && (
                                                <p className={`description ${isDescriptionVisible ? "fadeIn" : ""}`}>
                                                    {section.description}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </Col>
                        <Col lg={12} md={24}>
                            <div className={`AccordionImageContainer ${isImageVisible ? "fadeIn" : ""}`}>
                                <img
                                    src={selectedSection.image}
                                    alt={selectedSection.title}

                                />
                                <a href="/Products"> <button className="MSLCommonBtn" style={{ margin: "10px 0" }}>Read More</button></a>

                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
        </>
    )
}
export default MSLHomeAbout