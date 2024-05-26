import React from 'react'
import './Pricing.css';

function Pricing() {
  return (
    <div className='pricing'>
        <h2>WULTZ Pricing Plans</h2>

        <div className='pricing-con'>
            <div className='pricing-box'>
                <div className='pricing-name'>
                    <span>Individual</span>
                    <h1>$4.99 <strong>/month</strong></h1>
                </div>

                <div className='pricing-features'>
                    <span>Features</span>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Basic customization options</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>No - priority customer support</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Limited playlist functionality</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Real-time syncing across devices</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

            <div className='pricing-mainbox'>
                <div className='pricing-name'>
                    <span>Duo</span>
                    <h1>$9.99 <strong>/month</strong></h1>
                </div>

                <div className='pricing-features'>
                    <span>Features</span>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_1686552853_ac02z6.jpg' alt=''></img>
                            <p>Advanced customization options</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_1686552853_ac02z6.jpg' alt=''></img>
                            <p>Dedicated priority customer support</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_1686552853_ac02z6.jpg' alt=''></img>
                            <p>Newly-enhanced playlist functionality</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_1686552853_ac02z6.jpg' alt=''></img>
                            <p>Cross-device compatibility</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

            <div className='pricing-box'>
                <div className='pricing-name'>
                    <span>Family</span>
                    <h1>$13.99 <strong>/month</strong></h1>
                </div>

                <div className='pricing-features'>
                    <span>Features</span>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>All features of the Duo plan</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Dedicated account manager</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Content management features</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711236/Group_2425_x6nltt.jpg' alt=''></img>
                            <p>Enterprise-grade security and compliance</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pricing