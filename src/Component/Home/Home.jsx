import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DefaultImage from '/images/AbmittalBack.jpeg'; // Default image
import MittalGroupLogo from "/images/MittalGroupLogo.png";

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

  return (
    <>
      <section className='MittalHomeContainer'>
        <div className='MittalBackImg'>
          <img
            src={images.length > 0 ? images[currentImageIndex] : DefaultImage}
            alt="Background"
            className={`fade ${fadeIn ? 'fade-in' : 'fade-out'}`} // Conditional class for fade effect
          />
          <div className='ImageOverlay'></div>
        </div>
        <div className='MittalGroupLogoContainer'>
          <Link to="/"><img src={MittalGroupLogo} alt="Mittal Group Logo" /></Link>
        </div>
      </section>
    </>
  );
};

export default Home;
