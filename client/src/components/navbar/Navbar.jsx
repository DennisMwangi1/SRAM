import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

import './NavbarStyles.css'
import FadeMenu from '../dashboard/FadeMenu';

function Navbar({openModal}) {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' >
            <div className={nav ? 'logo dark' : 'logo'}>
            <div className="">
            </div>
            </div>
            <ul className="flex justify-between place-items-center">
                <div className='flex '>
                    <img className='ml-2' src='https://karma.co.ke/wp-content/uploads/2022/03/KARMA-Favicon.png' alt="" width={100}  />
            <h1 className='pt-8 font-black text-5xl'>SARM</h1>
                </div>
            
                <div className='grid grid-cols-5'>
                <Link className='cursor-pointer' to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link className='cursor-pointer' to='destinations' smooth={true} duration={500} ><li>about</li></Link>
                <Link className='cursor-pointer'  to='carousel' smooth={true} duration={500} ><li>objectives</li></Link>
                <Link className='cursor-pointer' to='views' smooth={true} duration={500} ><li>contact us</li></Link>
                <span className=''><FadeMenu/></span>
                </div>
            </ul>
            
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
                        <button onClick={openModal()} type="button" class="btn btn-membership">membership</button>
                        <button type="button" class="btn btn-login">login</button>
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default Navbar
