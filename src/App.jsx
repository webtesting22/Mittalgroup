import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import AboutUs from './Component/AboutUs/AboutUs'
import Group from './Component/GroupCompanies/Group'
import ContactUs from './Component/ContactUs/ContactUs'
import MittalGallery from './Component/Mittalgallery/MittalGallery'
import Home from './Component/Home/Home'
import Footer from "./Component/Footer/Footer"
import MittalHome from './Component/MittalHome/MittalHome'
import Clients from "./Component/Clients/Clients"
import Products from "./Component/Products/Products"
import MittalProduct from './Component/MinimalComponets/SpecificProductsPage/MittalProduct'
import MittalManufacturing from './Component/MinimalComponets/ManufacturingProcess/MittalManufacturing'
const App = () => {
    return (
        <>

            <Navbar />
            {/* <Home /> */}
            <Routes>
                <Route path='/' element={<MittalHome />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                {/* <Route path='/Group' element={<Group />} /> */}
                <Route path='/Gallery' element={<MittalGallery />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path="/Clients" element={<Clients />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/mittalProduct/:service" element={<MittalProduct />} />
                <Route path="/mittalManufacturing" element={<MittalManufacturing />} />
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
