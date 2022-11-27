import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            {/* <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video> */}
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://karma.co.ke/wp-content/uploads/2022/11/KARMA-6th-Annual-Conference-Photos-3.jpg" alt="..."/>
      
      <div class="carousel-caption d-none d-md-block">
        
        <button type="button" class="btn btn-warning p-3">Join us </button>
                
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://pbs.twimg.com/media/FhCjXPFXgAA1T7a.jpg" class="d-block w-100" alt="albert"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>our 6th annual conference </h1>
        
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://pbs.twimg.com/media/FhBA2xvXgAA6qDo?format=jpg&name=large" class="d-block w-100" alt="mlong"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>be a part of this great team </h1>
        
      </div>
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="2000">
      <img src="https://thumbs.dreamstime.com/b/business-man-holding-files-folders-14621710.jpg" class="d-block w-100" alt="albert"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div className="overlay"></div>
            <div className="content">
            
                
                
                {/* <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default Hero