import React from 'react'
import HG from '../../assets/HG.png'
import MG from '../../assets/MG.png'
import VG from '../../assets/VG.png'
import './background.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'


const Background = () => {
  return (<>
  
    <div className="background-container">
       <Navbar/>
       <Header/>
      <img src={HG} alt="HG" className="image-overlay1" />
      <img src={MG} alt="MG" className="image-overlay2" />
      <img src={VG} alt="VG" className="image-overlay3" />
      
    </div>
    
    </>
  )
}

export default Background
