import React, { useEffect } from 'react';
import './Home.css';
import { split } from "../../Animations/Text";
import Choose from '../../Components/Choose/Choose';

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

          </div>
        </div>

        <div className='features'>
          <h2 data-animation='paragraph'>Some of the features that makes  Wultz good for you</h2>

          <div className='feature-row'>
            <div className='feature-box' id='curve-box'>
              <div className='icon'></div>
              <p>Intuitive Interface</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box'>
              <div className='icon'></div>
              <p>Task Organization</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box'>
              <div className='icon'></div>
              <p>Deadline Tracking</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>

            <div className='feature-box' id='curve-box2'>
              <div className='icon'></div>
              <p>Notifications</p>
              <span>Simplify your tasks with an easy-to-navigate platform.</span>
            </div>
          </div>
        </div>  
       </div>

      <Choose />   
    </div>   
  )
}

export default Home