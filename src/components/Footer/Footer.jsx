import React,{useRef,useEffect} from 'react'
import './footer.css'
import {TweenMax,Power3} from 'gsap'


const Footer = () => {

  let LogoItem=useRef(null);

useEffect(()=>{
  console.log(LogoItem)
  TweenMax.to(
    LogoItem,
    .8,{
      opacity:1,
      y:-20,
      ease: Power3.easeOut
    }
  )
})
  return (
    <div className='Footer__container' ref={el => {LogoItem=el}}>
        <div className='Footer__container-part1'>
      <div className='Footer__container-MNTN'>
        <h1>M</h1>
        <h1>N</h1>
        <h1>T</h1>
        <h1>N</h1>
      </div>
      <div className='Footer__container-content'>
<p>Get out there & discover your next slope, mountain & destination!</p>
      </div>
      <div className='Footer__container-content1'>
<p>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
      </div>
      </div>
      <div className='Footer__container-links'>
        <h1>More on The Blog</h1>
        <p><a>About MNTN</a></p>
        <p><a>Contributors & Writers</a></p>
        <p><a>Write For Us</a></p>
        <p><a>Contact Us</a></p>
        <p><a>Privacy Policy</a></p>
      </div>

      <div className='Footer__container-links1'>
        <h1>More on MNTN</h1>
        <p><a>The Team</a></p>
        <p><a>Jobs</a></p>
        <p><a>Press</a></p>
      </div>
    </div>
  )
}

export default Footer
