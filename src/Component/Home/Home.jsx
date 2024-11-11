import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DefaultImage from '/images/AbmittalBack.jpeg'; // Default image
import MSLGroupLogo from "/images/MittalGroupLogo.png";
import MSLLogo from "/images/MittalLogo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import carousal1 from "./carousal1.jpeg"
import carousal2 from "./carousal2.jpeg"
import carousal3 from "./carousal3.jpeg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';
import MSLHomePage from '../MinimalComponets/HomePageComapanyContent/MittalHomePage';
const Home = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // State to control fading

  // Update image every 2 seconds
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setFadeIn(false); // Start fading out

        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setFadeIn(true); // Start fading in the new image
        }, 500); // Timeout should match the CSS transition duration

      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [images]);

  const carousalImages = [
    {
      img: carousal1
    },
    {
      img: carousal2
    },
    {
      img: carousal3
    }
  ]

  return (
    <>
      <div className='AnimatedHomeSlider'>
        <div className='MSLHomeContent'>
          <h3>Shaping the future of steel piping.</h3>
          <h1>MSL Production</h1>
          <p>MSL provides premium steel pipes designed for strength and durability. Our precision engineering ensures reliable solutions for every project. Contact us today for a custom quote tailored to your needs.</p>
        </div>
        <div className='blackOverlay'>

        </div>
        <div className='pcNone'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Autoplay]}
            className="mySwiper"
            id='SwiperHome'
            style={{ position: "static" }}
          >
            {carousalImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mobileNone'>
          <video
            src="https://webtesting-upload.vercel.app/assets/AB%20Mittal%20Video-CSf5vDXC.mp4"
            loop={true} // Set loop to true for continuous playback
            autoPlay
            muted
            playsInline // Prevent fullscreen on mobile


            style={{ width: '100%', height: "100%", objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
          />
        </div>
      </div>
      <MSLHomePage />

    </>
  );
};

export default Home;
