import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                <div className="navItem">
            <div className='flex '>
                    <img className='ml-2' src='https://karma.co.ke/wp-content/uploads/2022/03/KARMA-Favicon.png' alt="" width={100}  />
            <h1 className='pt-8 font-black text-5xl'>SARM</h1>
                </div>
            </div>
       
            <p className='nai'>Nairobi, Kenya</p>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        
                    </div>
                </div>
                 <p className='copyright' >Copyright © 2022 SARM. All Rights Reserved. Designed by Fix Kenya Limited.</p>

                    
                
            </div>
        </div>
    )
}

export default Footer
