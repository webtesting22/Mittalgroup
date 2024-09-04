import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import About from './Component/Pages/Aboutus/About'
import Group from './Component/Pages/Groupcom/Group'
import Contact from './Component/Pages/Contactus/Contact'
import Gallery from './Component/Pages/Gallery/Gallery'
import Home from './Component/Pages/home/Home'
import ContactForm from './Component/Pages/Contactus/Contact'

const App = () => {
    return (
        <>
            <div className='app'>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/group' element={<Group />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <About />

            </div>
            <div>
                <Gallery />
                <ContactForm />
            </div>
        </>
    )
}

export default App
