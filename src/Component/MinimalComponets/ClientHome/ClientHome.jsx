import React from "react";
import "./ClientHome.css";
import Client from "../../Clients/ClientsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const ClientHome = () => {

  return (
    <>
      <section className="HomePageClientSection">

        <div className="clientHeadingContainer">
          <div className="HeadingContainer">
            <h1>Our Trusted Clients</h1>
            <p>Together with our partners, we forge strong connections that help us deliver durable, sustainable steel products to meet evolving industry demands.</p>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is <= 768px
              768: {
                slidesPerView: 4, // Show 2 slides per view on mobile
                spaceBetween: 20,
                centeredSlides: true
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 5,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 5,
                centeredSlides: true,
              }
            }}
            pagination={{
              clickable: true,
            }}
            speed={700}

            navigation={false}
            modules={[Autoplay]}
            className="clientSwiper"
            id="clientSwiper"
          >
            {Client.map((item, index) => (
              <SwiperSlide key={index} id="swiperLogoImageContainer"><img src={item.img} alt="" className="SwiperLogoImage" /></SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </>
  );
};

export default ClientHome;
