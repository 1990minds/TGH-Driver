import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from React Router
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import './index.css';

function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location from React Router

  useEffect(() => {
    // Check if the current path is the root URL ('/')
    if (location.pathname === '/') {
      const openTimeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
   
    } else {
      setIsOpen(false); // Close the modal when not on the home page
    }
  }, [location.pathname]); // Watch for changes in the pathname

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <ModalVideo
          channel="youtube"
          isOpen={true}
          videoId="e7mwYsvoACg"
          onClose={handleClose}
          autoplay={false}
        style={{border:"none"}}

          
        />
      )}
    </div>
  );
}

export default VideoModal;
