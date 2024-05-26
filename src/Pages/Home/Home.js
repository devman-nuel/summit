import React, { useEffect } from 'react';
import './Home.css';
import { split } from "../../Animations/Text";
import Choose from '../../Components/Choose/Choose';
import Pricing from '../../Components/Pricing/Pricing';


function Home() {
  useEffect(() => {
    split(); // Initialize split text animation
  }, []);

  return (
    <div>
       <div className='hero'>
          <div className='main-hero'>
          <h2 data-animation='paragraph'>Streamline Your Workflow, Accomplish More with Wultz</h2>
          <p>Empower Your Productivity with a Smart Task Manager Designed for Success</p>

          <div className='hero-btn'>
            <button className='get'>Get started</button>
            <button className='learn'>Learn more</button>
          </div>

          <div className='pad'>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716716571/GDqYi9DXUAAMIgg_vzf8du.jpg' alt=''></img>
          </div>
        </div>

        <div className='features'>
          <h2 data-animation='paragraph'>Some of the features that makes  Wultz good for you</h2>

          <div className='feature-row'>
            <div className='feature-box' id='curve-box'>
              <div className='icon'> <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711926/Vector_yn71lm.png' alt=''></img></div>
              <p>Intuitive Interface</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box'>
              <div className='icon'><img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711926/Group_2258_e2jcyr.png' alt=''></img></div>
              <p>Task Organization</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box'>
              <div className='icon'><img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711926/Vector2_fk5lfn.png' alt=''></img></div>
              <p>Deadline Tracking</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box' id='curve-box2'>
              <div className='icon'><img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716711926/Vector3_m0d5td.png' alt=''></img></div>
              <p>Notifications</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>
          </div>
        </div>  
       </div>

      <Choose />   
      <Pricing />
    </div>   
  )
}

export default Home