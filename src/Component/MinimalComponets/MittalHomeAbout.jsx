import React from "react";
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
    const SliderImages = [
        {
            image: SliderImage4,
            SwiperTitle: "Flat Bars"
        },
        {
            image: SliderImage2,
            SwiperTitle: "Round Bars"
        },
        {
            image: SliderImage3,
            SwiperTitle: "Channels"
        },
        {
            image: SliderImage1,
            SwiperTitle: "Angles"
        }
    ]
    return (
        <>
            <section>
                <div >
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="LeftContentContainer sectionPadding">
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
                                <p>Mittal Sections Limited (MSL) is one of the largest steel rolling mill located at Changodar,
                                    Ahmedabad. MSL is into the rolling of complete ranige of MS sections like Angles, Channels, Squares,
                                    Rounds & Flat bars etc. MSL's quest for excellence through various technologies & quality initiatives
                                    has helped to establish us as one of the largest manufactureres of entire range. Since inception of the
                                    organisation we have grown in reserves, profits and customer base, MSL's large talent pool of skilled technicians,
                                    engineers & managers enable the delivery of superior quality product helping the organisation to build a strong,
                                    self reliant and modern industrial base.</p>
                                <br />
                                <Link to="/AboutUs"> <button className="MittalCommonBtn">Read More</button></Link>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
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
                                                    <Link to="/Products">   <button className="infoBtn">More Info</button></Link>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    ))}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default MittalHomeAbout