import React from 'react'
import './card.css'
import Image1 from '../../assets/01 (1).png'
import arrow from '../../assets/arrow_downward_24px.svg'
import { useRef,useEffect } from 'react'
import { TweenMax,Power3 } from 'gsap/gsap-core'

const Card = (props) => {
  let CardAnimation=useRef(null);

  useEffect(()=>{
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
    <div className='Card__component-container' id='Card' ref={el=>{CardAnimation=el}}>
      <div className='Card__component-number'>
       <h1>{props.number}</h1>
      </div>
      <div className='Card__component-content'>
        <div className='Card__component-subtitle'>
        <div className='Card__component-line'></div>
            <h4>{props.subtitle}</h4>
        </div>
        <div className='Card__component-title'>
        <h1>{props.title}</h1>
        <p>{props.para} </p>
        <div className='Card__component-readmore'>
          <p>Read More</p><img src={arrow} alt='arrow' className='arrow-icon'/>
        </div>
      </div>
      </div>
      <div className='Card__component-image'>
      <img src={props.image} />
      </div>
    </div>
  )
}

export default Card
