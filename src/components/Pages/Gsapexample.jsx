import React, { useEffect } from "react";
import { gsap } from "gsap";
import Tire from "../../assets/tire.svg"; // Your SVG file

const TireLoader = () => {
  useEffect(() => {
    const tire = document.querySelector(".tire");

    // GSAP Animation for tire rotation
    gsap.to(tire, {
      rotation: "+=360", // Rotates the tire
      duration: 7,       // Time for one rotation
      repeat: -1,        // Infinite loop
      ease: "linear",    // Smooth, continuous rotation
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Using SVG as an Image */}
      <img
        src={Tire}
        alt="Tire"
        className="tire w-32 h-32" // Styling for the tire
      />
    </div>
  );
};

export default TireLoader;
