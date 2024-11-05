import React, { useState, useEffect } from "react";
import "./ClientHome.css";
import Client from "../../Clients/ClientsData";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const ClientHome = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const logosPerSet = 10; // Number of logos to display at a time

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next set of logos, and loop back if at the end
      setCurrentSetIndex((prevIndex) =>
        (prevIndex + 1) * logosPerSet >= Client.length ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Determine the slice of logos to show
  const currentLogos = Client.slice(
    currentSetIndex * logosPerSet,
    currentSetIndex * logosPerSet + logosPerSet
  );

  return (
    <>
      <section className="HomePageClientSection">
        <Row>
          <Col lg={12} md={8}>
            <div className="clientHeadingContainer">
              <div className="HeadingContainer">
                <h1>Our Trusted Clients</h1>
                <p>Together with our partners, we forge strong connections that help us deliver durable, sustainable steel products to meet evolving industry demands.</p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={18}>
            <div className="ClientLogosContainer">
              {currentLogos.map((item, index) => (
                <div key={index} className="ClientLogoimage show">
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
            {/* <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {currentLogos.map((item, index) => (
                  <SwiperSlide key={index}><img src={item.img} alt="" className="SwiperLogoImage"/></SwiperSlide>
                ))}
              </Swiper>

            </div> */}

          </Col>
        </Row>
      </section>
    </>
  );
};

export default ClientHome;
