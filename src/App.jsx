import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import AboutUs from './Component/AboutUs/AboutUs'
import ContactUs from './Component/ContactUs/ContactUs'
import MSLGallery from './Component/Mittalgallery/MSLGallery'
import Footer from "./Component/Footer/Footer"
import MSLHome from './Component/MittalHome/MittalHome'
import Clients from "./Component/Clients/Clients"
import Products from "./Component/Products/Products"
import MSLProduct from "./Component/MinimalComponets/SpecificProductsPage/MittalProduct"
import Quality from './Component/Quality/Quality'
import MSLManufacturing from "./Component/MinimalComponets/ManufacturingProcess/MittalManufacturing"
import IssuerCompanyPage from './Component/Investors/IssuerCompanyPage'
import GroupCompaniesPage from './Component/Investors/GroupCompaniesPage'
const App = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path='/' element={<MSLHome />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/Gallery' element={<MSLGallery />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path="/Clients" element={<Clients />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Products/:service" element={<MSLProduct />} />
                <Route path="/Manufacturing" element={<MSLManufacturing />} />
                <Route path='/Quality' element={<Quality/>}/>
                <Route path="/IssuerCompany" element={<IssuerCompanyPage />} />
                <Route path="/GroupCompanies" element={<GroupCompaniesPage />} />
            </Routes>
            <Footer />


        </>
    )
}

export default App
