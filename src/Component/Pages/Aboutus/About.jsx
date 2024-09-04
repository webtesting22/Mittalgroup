import React from 'react'
import './About.css'
// import imgbw from '../../assets/images/imgbw.jpg';
import imgbw from "../../../assets/images/imgbw.jpg";

const About = () => {
  return (
    <>
      <div className='header_content'>
        <h1>About us</h1>
        <p>We engineer commitments into high quality products. we do dream, set our own Goals and transmute them into real engineering projects. Today, AB Mittal Group of Companies is a benchmark name in the business world as it has evolved itself into a multifaceted conglomerate with a diverse range of business interest starting from cutting edge manufacturing and trading of structural steel products, Chemicals, Textiles and Entertainment. Our commitment towards our customers is our pride, and our integrity designs the quality of our products.</p>
      </div>

      <div className='imgb'>
        <img src={imgbw} alt="img" />
      </div>
    </>
  )
}

export default About
