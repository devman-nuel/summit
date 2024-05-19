import React, { useEffect } from 'react';
import './ImageReveal.css';

const ImageReveal = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };

    // IMAGE ANIMATION

    let revealCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;

        if (entry.isIntersecting) {
          container.classList.add("animating");
          return;
        }

        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating");
        }
      });
    };

    let revealObserver = new IntersectionObserver(revealCallback, options);

    document.querySelectorAll(".reveal").forEach((reveal) => {
      revealObserver.observe(reveal);
    });

    // TEXT ANIMATION

    let fadeupCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
        container.classList.add("not-fading-up");

        if (entry.isIntersecting) {
          container.classList.add("fading-up");
          return;
        }

        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("fading-up");
        }
      });
    };

    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

    document.querySelectorAll(".fadeup").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });
  }, []);

  return (
    <>
      <div className='container' style={{ background: '#b69187' }}>
        <h2 className="fadeup">Cool cool cool</h2>
        <div className='reveal'>
          <img src='https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' alt='cool' />
        </div>
      </div>
      <div className='container' style={{ background: '#3c564f' }}>
        <h2 className="fadeup">Cool cool cool</h2>
        <div className='reveal'>
          <img src='https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' alt='cool' />
        </div>
      </div>
      <div className='container' style={{ background: '#b6916d' }}>
        <h2 className="fadeup">Cool cool cool</h2>
        <div className='reveal'>
          <img src='https://images.unsplash.com/photo-1496198253360-4c44aa485f6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='cool' />
        </div>
      </div>
      <div className='container' style={{ background: '#bcb8ad' }}>
        <h2 className="fadeup">Cool cool cool</h2>
        <div className='reveal'>
          <img src='https://images.unsplash.com/photo-1494058303350-0bd5a9ecc5d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' alt='cool' />
        </div>
      </div>
     
    </>
  );
};

export default ImageReveal;
