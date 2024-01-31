import React from 'react'
import './navbar.css'
import CartImage from '../../assets/cart.svg'
import insta from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

const Navbar = () => {
  return (<>
    <div className='Navbar__container'>
      <div className='Navbar__title'>
        <h1>MNTN</h1>
        <div className='Navbar__title-follow'>
    <h4>Follow us</h4>
    <img src={insta}/>
    <img src={twitter}/>
  </div></div>
        <div className='Navbar__title-links'>
          <a href="#Equipment" >Equipment</a>
          <a href="#About us" >About us</a>
          <a href="#Blog" >Blog</a>
      </div>
      <div className='Navbar__title-account'>
        <img src={CartImage}/><p>Account</p>
      
      </div>
      
    </div>
    </>
  )
}

export default Navbar
