import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import AboutUs from './Component/AboutUs/AboutUs'
import Group from './Component/GroupCompanies/Group'
import ContactUs from './Component/ContactUs/ContactUs'
import Gallery from './Component/Gallery/Gallery'
import Home from './Component/Home/Home'
import Footer from "./Component/Footer/Footer"
import MittalHome from './Component/MittalHome/MittalHome'
import Clients from "./Component/Clients/Clients"
import Products from "./Component/Products/Products"
const App = () => {
    return (
        <>

            <Navbar />
            {/* <Home /> */}
            <Routes>
                <Route path='/' element={<MittalHome />} />
                <Route path='/AboutUs' element={<AboutUs />}/>
                <Route path='/Group' element={<Group />} />
                <Route path='/Gallery' element={<Gallery />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path="/Clients" element={<Clients/>}/>
                <Route path="/Products" element={<Products/>}/>
            </Routes>
            <Footer />


            {/* <div>
                <Gallery />
                <ContactForm />
            </div> */}
        </>
    )
}

export default App
