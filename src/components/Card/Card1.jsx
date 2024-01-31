
import React from 'react';
import './card.css';
import Image1 from '../../assets/01 (1).png';
import arrow from '../../assets/arrow_downward_24px.svg';
import Image2 from '../../assets/01 (2).png';
import { useRef,useEffect } from 'react'
import { TweenMax,Power3 } from 'gsap/gsap-core'

const Card1 = () => {
  let CardAnimation=useRef(null);

  useEffect(()=>{
    console.log(CardAnimation)
TweenMax.to(
  CardAnimation,
  .8,{
opacity:1,
y:-20,
 ease:Power3.easeOut
  }
)
  })
  return (
    <div className='Card__component-container'>
      <div className='Card__component-image1'>
        <img src={Image2} alt="Image2" />
      </div>
      <div className='Card__component-number1' id='Card1'>
        <h1>02</h1>
      </div>
      <div className='Card__component-content1'>
        <div className='Card__component-subtitle'>
          <div className='Card__component-line'></div>
          <h4>Hiking Essentials</h4>
        </div>
        <div className='Card__component-title'>
          <h1>Picking the right Hiking Gear!</h1>
          <p ref={el=>{CardAnimation=el}} className='Card__component-text'>
            The nice thing about beginning hiking is that you don’t really need any special gear; you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.
          </p>
          <div className='Card__component-readmore'>
            <p className='readmore-text'>Read More</p>
            <img src={arrow} alt="Arrow" className='arrow-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
