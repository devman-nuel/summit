import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-left'>
          <h2 data-animation='paragraph'>Task Management Platform</h2>
          <button>Try WULTZ now</button>
        </div>

        <div className='footer-right'>
          <div className='footer-box'>
             <span>Mobile & Tablet</span>
             <p>Android</p>
             <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1696692918/uiw_android_i3b9ry.png' alt=''></img>
             <button>Download</button>
          </div>

          <div className='footer-box'>
             <span>Mobile & Tablet</span>
             <p>iOS</p>
             <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1696733735/ic_outline-apple_gh1zb0.png' alt=''></img>
             <button>Download</button>
          </div>
        </div>
      </div>

      <div className='footer-text'>
        <span>WULTZ</span>

        <div>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    
    </div>
  )
}

export default Footer