import React from 'react'
import  './Navbar.css'



const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                WULTZ
            </div>

            <ul>
                <li>Range</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Contact</li>
            </ul>

            <div>
                <button>Get started</button>
            </div>     
        </div>       
    )
  }


export default Navbar