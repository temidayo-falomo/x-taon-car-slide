import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { RiCloseLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi'
import {GoSearch} from 'react-icons/go'

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <nav>
        
      <div className="nav-container">
        <div className="mobile-container">
          <img src='./assets/X-TAON.svg' alt='' className='logo'/>
          <div className='menu-item' onClick={handleClick}>
              {click ? <RiCloseLine className='hamburger' /> : <GiHamburgerMenu  className='hamburger'/>}
          </div>
        </div>

        <div className={click ? 'sidebar active' : 'sidebar'}>
        <ul className="nav-links">
          <li><a href='/'>Overview</a></li>
          <li><a href='/'>Details</a></li>
          <li><a href='/'>Contact Us</a></li>
          <li><a href='/'><GoSearch /></a></li>
        </ul>
      </div>

      </div>
    </nav>
  )
}

export default Navbar