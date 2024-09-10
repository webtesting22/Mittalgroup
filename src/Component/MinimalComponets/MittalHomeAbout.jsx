import React from "react";
import { Row, Col, Button } from "antd";
import "./MittalCommon.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from 'swiper/modules';
import SliderImage1 from "./Images/AboutSliderImages/SliderImage1.avif"
import SliderImage2 from "./Images/AboutSliderImages/SliderImage2.avif"
const MittalHomeAbout = () => {
    const SliderImages = [
        {
            image: SliderImage1,
            SwiperTitle: "Steel Melting"
        },
        {
            image: SliderImage2,
            SwiperTitle: "Steel Rolling"
        },
        {
            image: SliderImage2,
            SwiperTitle: "Weaving"
        },
        {
            image: SliderImage2,
            SwiperTitle: "Trading"
        },
        {
            image: SliderImage2,
            SwiperTitle: "Entertainment"
        }
    ]
    return (
        <>
            <section>
                <div className="AboutUsSection">
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="LeftContentContainer sectionPadding">
                                <h2><span>B</span>ehind the Brand</h2>
                                <p>We engineer commitments into high quality products.
                                    we do dream, set our own Goals and transmute them
                                    into real engineering projects. Today, AB Mittal Group
                                    of Companies is a benchmark name in the business world as
                                    it has evolved itself into a multifaceted conglomerate with
                                    a diverse range of business interest starting from cutting
                                    edge manufacturing and trading of structural steel products, Chemicals,
                                    Textiles and Entertainment. Our commitment towards our customers is our pride,
                                    and our integrity designs the quality of our products.</p>
                               <Link to="/AboutUs"> <button className="MittalCommonBtn">Read More</button></Link>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div>
                                <Swiper
                                    direction={'vertical'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    {SliderImages.map((item, index) => (
                                        <div className="SwiperImageContainer" key={index}>
                                            <SwiperSlide key={index}>
                                                <img src={item.image} alt="" />
                                                <div className="ContentContainer">
                                                    <h4 className="TitleForSlider">{item.SwiperTitle}</h4>
                                                    <button className="infoBtn">More Info</button>
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