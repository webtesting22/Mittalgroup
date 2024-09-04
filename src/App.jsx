import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import AboutUs from './Component/AboutUs/AboutUs'
import Group from './Component/GroupCompanies/Group'
import ContactUs from './Component/ContactUs/ContactUs'
import Gallery from './Component/Gallery/Gallery'
import Home from './Component/home/Home'


const App = () => {
    return (
        <>
           
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                    <Route path='/Group' element={<Group />} />
                    <Route path='/Gallery' element={<Gallery />} />
                    <Route path='/ContactUs' element={<ContactUs />} />
                </Routes>
                {/* <Footer/> */}

            
            {/* <div>
                <Gallery />
                <ContactForm />
            </div> */}
        </>
    )
}

export default App
