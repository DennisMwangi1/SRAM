import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
            <div className="navItem">
            <img src='https://karma.co.ke/wp-content/uploads/2022/03/Karma-Website-Logo.png' alt="" width={450} height={100} />
            </div>
                {/* <h2>hehe logo hapa</h2> */}
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>about</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>officials</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>news and events</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>contact us</li></Link>
            </ul>
            <button type="button" class="btn btn-warning">membership</button>
            <button type="button" class="btn btn-primary">login</button>
            {/* <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div> */}
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>HOME</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>ABOUT</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>OFFICIALS</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>NEWS AND EVENTS</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>CONTACTS US </li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button type="button" class="btn btn-membership">membership</button>
                        <button type="button" class="btn btn-login">login</button>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
