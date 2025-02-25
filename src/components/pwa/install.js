import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

let deferredPrompt;

export default function Install() {
  const [installable, setInstallable] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      console.log("INSTALL: Success");
    });
  }, []);

  const handleInstallClick = (e) => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt && deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt &&
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
      });
  };
  const handleCloseClick = () => {
    // Hide the installation banner
    setInstallable(false);
  };

  return (
    <InstallWrap>
      {installable && (
        <Fade top>
          <div
            className=" bg-gray-50    rounded-t-2xl install flex justify-center pt-6 items-start gap-6 md:hidden  z-50"
            style={{ fontFamily: "Poppins" }}
          >
            <h1
              className="text-[16px] text-[#314387] pb-1 font-medium "
              style={{ fontFamily: "Poppins" }}
            >
              For better experience<br />
              use TGH Driver App{" "}
            </h1>

            <button
              className="text-white bg-[#6b65e0]  rounded-full p-2 px-5 text-[14px]"
              onClick={handleInstallClick}
            >
              Install
            </button>
            <button
              className="text-red-800 text-lg"
              onClick={handleCloseClick}
            >
              &#10005; 
            </button>
          </div>
        </Fade>
      )}
    </InstallWrap>
  );
}

const InstallWrap = styled.div`
  .install {
    width: 100%;
    height: 8.5rem;
    position: fixed;
    bottom: 0%;
    left: 0%;
  }
`;
