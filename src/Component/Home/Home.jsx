import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import MSLHomePage from '../MinimalComponets/HomePageComapanyContent/MittalHomePage';
import NumbersComponent from '../MinimalComponets/NumbersComponent/NumbersComponent';
import ClientHome from '../MinimalComponets/ClientHome/ClientHome';
const Home = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // State to control fading
  const [isMuted, setIsMuted] = useState(true); // State to track mute status
  const videoRef = useRef(null); // Reference to the video element
  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted); // Toggle the mute state
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Update the video's mute property
    }
  };
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



  return (
    <>
      <div className='AnimatedHomeSlider'>
        <div className='MSLHomeContent'>

          <h2>Shaping the future of Structural Steel</h2>
          <p>MSL provides premium steel products designed for strength and durability. Our precision engineering ensures reliable solutions for every project.</p>
        </div>
        <div className='blackOverlay'>

        </div>
        <div className='pcNone'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            className="mySwiper"
            id='SwiperHome'
            style={{ position: "static" }}
          >
            <SwiperSlide>
              <video
                src="https://webtesting-upload.vercel.app/assets/AB%20Mittal%20Video-CSf5vDXC.mp4"
                loop={true} // Set loop to true for continuous playback
                autoPlay
                muted={isMuted}
                playsInline // Prevent fullscreen on mobile
                ref={videoRef}


                style={{ width: '100%', height: "100%", pointerEvents: 'none', objectFit: "cover" }} // Ensure no interaction triggers fullscreen
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='mobileNone'>
          <video
            src="https://webtesting-upload.vercel.app/assets/AB%20Mittal%20Video-CSf5vDXC.mp4"
            loop={true} // Set loop to true for continuous playback
            autoPlay
            muted={isMuted}
            playsInline // Prevent fullscreen on mobile
            ref={videoRef}


            style={{ width: '100%', height: "100%", pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
          />
          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              // top: "10px",
              bottom: "1%",
              right: "1%",
              padding: "7px 10px",
              backgroundColor: isMuted ? "white" : "#9aa966",
              color: "black",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 100000, // Ensure button appears above the video
            }}
          >
            {isMuted ? <i class='bx bx-volume-mute' ></i> : <i class='bx bx-volume-full'></i>}
          </button>        </div>

      </div>
      <NumbersComponent />
      <MSLHomePage />

      <ClientHome />
    </>
  );
};

export default Home;
