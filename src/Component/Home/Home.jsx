import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import DefaultImage from '../../../public/images/AbmittalBack.jpeg'; // Default image
import MittalGroupLogo from "../../../public/images/MittalGroupLogo.png"
import MittalHomeAbout from '../MinimalComponets/MittalHomeAbout'
const Home = ({backgroundImage }) => {
  return (
    <>
      <section className='MittalHomeContainer'>
        <div className='MittalBackImg'>
        <img 
            src={backgroundImage || DefaultImage}  // Use the passed prop, fallback to default
            alt="Background" 
          />
          <div className='ImageOverlay'>

          </div>
        </div>
        <div className='MittalGroupLogoContainer'>
          <Link to="/"><img src={MittalGroupLogo} alt="" /></Link>
        </div>
      </section>
      {/* <MittalHomeAbout /> */}
    </>
  )
}

export default Home
