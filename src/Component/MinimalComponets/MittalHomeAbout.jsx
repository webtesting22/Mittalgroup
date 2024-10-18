import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "./MittalCommon.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from 'swiper/modules';
import SliderImage1 from "./Images/AboutSliderImages/mittal/angles.jpg"
import SliderImage2 from "./Images/AboutSliderImages/mittal/roundbars.jpg"
import SliderImage3 from "./Images/AboutSliderImages/mittal/channels.jpg";
import SliderImage4 from "./Images/AboutSliderImages/mittal/flatbar.webp"
const MittalHomeAbout = () => {
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
            <section>
                <div >
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="LeftContentContainer"
                            //  data-aos="fade-up" data-aos-duration="1000"
                            >
                                <h2><span>B</span>ehind the Brand</h2>
                                {/* <p>We engineer commitments into high quality products.
                                    we do dream, set our own Goals and transmute them
                                    into real engineering projects. Today, AB Mittal Group
                                    of Companies is a benchmark name in the business world as
                                    it has evolved itself into a multifaceted conglomerate with
                                    a diverse range of business interest starting from cutting
                                    edge manufacturing and trading of structural steel products, Chemicals,
                                    Textiles and Entertainment. Our commitment towards our customers is our pride,
                                    and our integrity designs the quality of our products.</p> */}
                                {/* <p>Mittal Sections Limited (MSL) is one of the largest steel rolling mill located at Changodar,
                                    Ahmedabad. MSL is into the rolling of complete ranige of MS sections like Angles, Channels, Squares,
                                    Rounds & Flat bars etc. MSL's quest for excellence through various technologies & quality initiatives
                                    has helped to establish us as one of the largest manufactureres of entire range. Since inception of the
                                    organisation we have grown in reserves, profits and customer base, MSL's large talent pool of skilled technicians,
                                    engineers & managers enable the delivery of superior quality product helping the organisation to build a strong,
                                    self reliant and modern industrial base.</p> */}
                                <p>At Mittal Sections Limited, we are not just steel manufacturers—we are innovators shaping
                                    the future of infrastructure. Founded in 2006, we are proud to lead the steel manufacturing
                                    industry in Gujarat with a commitment to quality, sustainability, and innovation. Our mission
                                    is to deliver world-class products and services that meet the diverse needs of our clients and
                                    contribute to the growth of our partners.
                                </p>
                                <br />
                                {/* <Link to="/AboutUs"> <button className="MittalCommonBtn">Read More</button></Link> */}
                                {/* <h2><span>O</span>ur Products</h2> */}
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {sections.map((section, index) => (
                                        <li
                                            className="accordionListItem"
                                            key={index}
                                            onClick={() => handleSectionClick(section)}
                                        >
                                            <div className="titleContainer">
                                                {/* Title of the section */}
                                                <span>{section.title}</span>
                                                <i class='bx bx-chevron-down'></i>
                                            </div>
                                            {/* Show description only for the selected section */}
                                            {selectedSection.title === section.title && (
                                                <p
                                                    className={`description ${isDescriptionVisible ? "fadeIn" : ""}`}>
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
                                <Link to="/Products"> <button className="MittalCommonBtn">Read More</button></Link>

                            </div>
                        </Col>
                        {/* <Col lg={12} md={24}>
                            <div>
                                <Swiper
                                    direction={'horizontal'}

                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    loop={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {SliderImages.map((item, index) => (
                                        <div className="SwiperImageContainer" key={index}>
                                            <SwiperSlide key={index}>
                                                <img src={item.image} alt="" />
                                                <div className="ContentContainer">
                                                    <h4 className="TitleForSlider">{item.SwiperTitle}</h4>
                                                    <Link to="/Products">
                                                        <button className="infoBtn">More Info</button>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    ))}
                                </Swiper>
                            </div>
                        </Col> */}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default MittalHomeAbout