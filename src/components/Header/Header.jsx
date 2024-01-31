import React from 'react'
import './header.css'
import Arrow from '../../assets/arrow.svg'
import Slider from '../../assets/Slider (1).svg'
import Start from '../../assets/Start.png'
import '../index.js'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Header = () => {
  const scrollToCard = () => {
    scroll.scrollTo({
      containerId: 'scrollTarget', 
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (<>
      <div className='Header__container'>
        <div className='Header__container1'>
      <div className='Header__container-line'></div>
      <div className='Header__container-guide'>
        <p>A Hiking guide</p>
        
      </div>
      </div>
      <div className='Header__container-main-title'>
      <div className='Header__container-title' >
        <h1>Be prepared for the Mountains and beyond!</h1>
        <div className='Header__container-scroll' >
     <p className='fade-in'>scroll down</p><img src={Arrow} alt='arrow' className='bounce1 arrow-icon1' onClick={scrollToCard}/>
     </div>
     </div>
      </div>
      <div className='Slider__numbers'>  
     <img src={Start}/>
     <p><a href="#Card" className=" color-effect">01</a></p>
     <p><a href="#Card1" className=" color-effect">02</a></p>
     <p><a href="#Card3" className=" color-effect">03</a></p>
     </div>
      <div className='Header__container-slider'>
     <img src={Slider}/>
     
      </div>
      
    </div>
</>

  )
}

export default Header
