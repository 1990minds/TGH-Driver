import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';

const VideoOverlay = ({ isOpen, onClose }) => {
  useEffect(() => {
    const closeOnOverlayClick = (event) => {
      if (isOpen && event.target.classList.contains('video-overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', closeOnOverlayClick);

    return () => {
      document.removeEventListener('click', closeOnOverlayClick);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-end justify-start  z-50 video-overlay">
          <div className='w-72 md:w-80   rounded-lg p-4 mb-20 md:mb-10'>
          <div className="relative aspect-w-16 aspect-h-9">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=QdI1B6-ybaY"
              width="100%"
              height="100%"
              controls={true}
            />
            <button
              className="absolute text-lg font-extrabold top-2 bg-white p-1 rounded-md right-2 text-red-500 hover:text-red-700"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default VideoOverlay;
