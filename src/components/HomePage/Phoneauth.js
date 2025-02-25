import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import {auth}from "../firebase"


// Initialize Firebase Authentication
// const auth = getAuth();

// Function to Set Up Recaptcha
const setUpRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha Verified");
      },
    },
    auth
  );
};

// Function to Send OTP
export const sendOTP = async (phoneNumber) => {
auth.settings.appVerificationDisabledForTesting = true;
  setUpRecaptcha();
  const appVerifier = window.recaptchaVerifier;

  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    console.log("OTP Sent Successfully!");
  } catch (error) {
    console.error("Error sending OTP: ", error);
  }
};

// Function to Verify OTP
export const verifyOTP = async (otp) => {
  try {
    const confirmationResult = window.confirmationResult;
    const result = await confirmationResult.confirm(otp);
    console.log("User signed in successfully!", result.user);
  } catch (error) {
    console.error("Error verifying OTP: ", error);
  }
};