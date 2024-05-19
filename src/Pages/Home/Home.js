import React, { useEffect } from 'react';
import './Home.css';
import { split } from "../../Animations/Text";
import ImageReveal from '../../Components/ImageReveal/ImageReveal';

function Home() {
  useEffect(() => {
    split(); // Initialize split text animation
  }, []);

  return (
    <div>
      <div  className='hero'>
        <div className='hero-left'>
          <h2 data-animation='paragraph'> Fusion Summit: Where Business Meets Art</h2>
          <p>Our mission is to create a dynamic platform where innovative thinkers, industry leaders, artists, and entrepreneurs converge to explore the intersections of creativity and commerce.</p>  
          <div>
            <button>Get an Invite</button>
          </div>   
        </div>
        
        <div className='hero-right'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713402018/pexels-steve-johnson-1789968_gplbku.jpg' alt=''></img>
        </div>
      </div>
      <ImageReveal />
    </div>
    
  )
}

export default Home