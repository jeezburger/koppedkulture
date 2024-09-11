import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle resizing of window and updating the screen size
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsSmallScreen(window.innerWidth < 768);
      }
    };

    // Initialize screen size on component mount
    handleResize();

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-banner-container">
      {/* Conditionally render video or image based on screen size */}
      {isSmallScreen ? (
        <video
          src="/assets/hero.mp4"
          alt="hero video"
          style={{ width: '100%' }}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src="/assets/LS.png"
          alt="hero image"
          style={{ width: '40%' }}
        />
      )}
    </div>
  );
};

export default HeroBanner;
