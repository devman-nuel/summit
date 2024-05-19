import React, { useState, useEffect } from "react";
import "./Preloader.css"; // Import your CSS file for styling

const Preloader = ({ images, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      let loaded = 0;

      images.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
          loaded++;
          setProgress((loaded / images.length) * 100);

          if (loaded === images.length) {
            setLoadingComplete(true);
            onComplete();
          }
        };
      });
    };

    preloadImages();
  }, [images, onComplete]);

  return (
    <div className={`preloader-container ${loadingComplete ? 'hidden' : ''}`}>
      <div className="preloader-progress" style={{ width: `${progress}%` }}></div>
      <p> {progress.toFixed(0)}%</p>
      <span>Loading Images For Better Experience</span>
    </div>
  );
};

export default Preloader;