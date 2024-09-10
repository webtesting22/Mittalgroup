import React from 'react'
import './Home.css'
import AbmittalBack from "../../../public/images/AbmittalBack.jpeg"
import MittalGroupLogo from "../../../public/images/MittalGroupLogo.png"
import MittalHomeAbout from '../MinimalComponets/MittalHomeAbout'
const Home = () => {
  return (
    <>
      <section className='MittalHomeContainer'>
        <div className='MittalBackImg'>
          <img src={AbmittalBack} alt="" />
          <div className='ImageOverlay'>

          </div>
        </div>
        <div className='MittalGroupLogoContainer'>
          <img src={MittalGroupLogo} alt="" />
        </div>
      </section>
      {/* <MittalHomeAbout /> */}
    </>
  )
}

export default Home
