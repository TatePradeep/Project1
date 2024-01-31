import React from 'react'
import './bg-content.css'
import Card from '../Card/Card.jsx'
import Card1 from '../Card/Card1.jsx'
import Image1 from '../../assets/01 (1).png'
import Image3 from '../../assets/01 (3).png'
import Footer from '../Footer/Footer.jsx'


const Bgcontent = () => {

  
  return (
    
    <div className='Bg__container-content' id='scrollTarget' >
      <Card number="01" subtitle="GET STARTED" title="What level of  hiker are you?" para="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?" image={Image1}  />
      <div className='Bg__container-content1'>
      <Card1/>
      </div>
      <div className='Bg__container-content1'>
      <Card number="03" subtitle="where you go is the key" title="Understand Your Map & Timing" para="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.." image={Image3} id="Card3"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Bgcontent
