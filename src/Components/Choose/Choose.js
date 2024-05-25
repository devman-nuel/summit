import React, { useEffect } from 'react';
import './Choose.css';
import { split } from "../../Animations/Text";

function Choose() {
    useEffect(() => {
        split(); // Initialize split text animation
      }, []);
  return (
    <div className='choose'>
        <h2 data-animation='paragraph'>Why Choose WULTZ </h2>

        <div className='choose-con'>
            <div className='choose-left'>
                <span>Must know</span>
                <h2>Wultz, your all-in-one solution to manage tasks effortlessly</h2>
                <p>Say goodbye to chaos and hello to a streamlined workflow that helps you achieve your goals.</p>
                <button>Get Started</button>
            </div>

            <div className='choose-right'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716672227/Frame_1195_uzh5vi.jpg' alt=''></img>
            </div>
        </div>

        <div className='choose-con' id='reverse-choose'>
           <div className='choose-right'>
             <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716673712/Frame_1196_ppovvs.jpg' alt=''></img>   
            </div>

            <div className='choose-left'>
                <span>Must know</span>
                <h2>Wultz, your all-in-one solution to manage tasks effortlessly</h2>
                <p>Say goodbye to chaos and hello to a streamlined workflow that helps you achieve your goals.</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Choose