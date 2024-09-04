import React from 'react'
import './Header.css'
import intro from '/images/intro.jpg';

const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={intro} alt="intro" className='intro' />
            </div>
        </>
    )
}

export default Header
