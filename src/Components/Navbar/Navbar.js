import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  './Navbar.css'



const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
  

    return (
        <div className='nav'>
           <div className='nav-container'>
            <div className='navbar'> 
                <div className='logo'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713400428/Fusionlogo_jf7pjh.png' alt=''></img>
                </div>

                <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
                    
                    <div className= {navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>

            <div className='nav-overlay' style={{
                top: navOpen ? "0" : "-100%",
                transitionDelay : navOpen ? "0s" : "0s"
            }}>

                <ul className='nav-links'>
                    <li className='nav-item'>
                      <NavLink to="/" onClick={() => setNavOpen(!navOpen)} style={{
                           top: navOpen ? "0" : "120px",
                           transitionDelay : navOpen ? "0" : "0s"   
                      }} >Home</NavLink>
                       <div className='nav-wrapper'></div>
                    </li>  

                    <li className='nav-item'>
                      <NavLink to="/About" onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "120px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>About</NavLink>
                       <div className='nav-wrapper'></div>
                    </li> 

                    <li className='nav-item'>
                      <NavLink to="/Gallery" onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "120px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>Gallery</NavLink>
                       <div className='nav-wrapper'></div>
                    </li>                             
                </ul>
            </div>
           </div> 
        </div>       
    )
  }


export default Navbar