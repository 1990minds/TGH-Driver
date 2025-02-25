import React, { useState, useEffect } from 'react';
import VideoPopup from './VideoPopup';

const EcommerceComponent = () => {
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);

  // Function to open the video popup
  const openVideoPopup = () => {
    setVideoPopupOpen(true);
  };

  // Use useEffect to automatically open the video popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openVideoPopup();
    }, 3000); // 5000 milliseconds (5 seconds)
    
    // Clean up the timer to avoid memory leaks
   
  }, []);

  // Function to close the video popup
  const closeVideoPopup = () => {
    setVideoPopupOpen(false);
  };

  return (
    <div>
    

      <VideoPopup isOpen={isVideoPopupOpen} onClose={closeVideoPopup} />
    </div>
  );
};

export default EcommerceComponent;
