import React, { useState, useRef } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { useParams } from 'react-router-dom';

export default function OtpInput() {
  const location = useLocation();
  const { pno } = useParams();
  const navigate = useNavigate();

  const user_phone = localStorage.getItem("phoneNumber")
    ? localStorage.getItem("phoneNumber")
    : null;
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  console.log("Received phone number:", pno);
  const handleChange = (value, index) => {
    if (isNaN(Number(value))) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const hhandleSubmit = (e) => {
    e.preventDefault()
    const otpString = otp.join('')
    if (otpString.length === 6) {
      alert(`Verifying OTP: ${otpString}`)
      // Here you would typically send the OTP to your server for verification
    } else {
      alert('Please enter all 6 digits of the OTP.')
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Validate OTP and phone number
  //     if (!otp.length || !pno) {
  //       toast.error('Please enter both phone number and OTP', {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 5000,
  //       });
  //       return;
  //     }

  //     const otpString = otp.join(''); // Convert OTP array to string

  //     // Make API request
  //     const response = await fetch('https://urchin-app-zyhma.ondigitalocean.app/api/verify-otp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ enteredOTP: otpString, phone_number: pno }),
  //     });

  //     const data = await response.json();

  //     if (response.status === 201) {
  //       if (data.token && data.Driver?._id) {
  //         localStorage.setItem('authToken', data.token);
  //         localStorage.setItem('Driver', data.Driver._id);
  //         localStorage.setItem('phone number', data?.phone_number);
  //       } else {
  //         toast.warning('Token or driver ID missing in response.', {
  //           position: toast.POSITION.TOP_CENTER,
  //           autoClose: 5000,
  //         });
  //       }

  //       toast.success('Login successful!', {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //       });
  //       console.log("---->🎁",data)


  //       navigate('/postloginhome');
  //       window.location.reload();
  //     } else {
  //       // Error: Show error message from server
  //       toast.error(data.error || 'Failed to verify OTP', {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 5000,
  //       });
  //     }
  //   } catch (error) {
  //     // Network or unexpected errors
  //     console.error('Error during OTP verification:', error);

  //     toast.error('Something went wrong. Please try again later.', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 5000,
  //     });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonenumber = Number(user_phone)
    console.log("here is the phone number from local storage", phonenumber, 'and the type of phone number is ', typeof phonenumber)
    try {
      if (!otp.length || !pno) {
        toast.error('Please enter both phone number and OTP', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        return;
      }

      const otpString = otp.join('');
      console.log("phone numbetr is ", phonenumber, "and the otp is " ,otpString)
      const response = await fetch('https://urchin-app-zyhma.ondigitalocean.app/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enteredOTP: otpString, phone_number: phonenumber }),
      });

      const data = await response.json();
      console.log("API Response:", data);  // Check what the API returns

      if (response.status === 201) {
        if (data.token && data.Driver?._id) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('Driver', data.Driver._id);

          // Store phone number from response or input
          const phoneNumberToStore = data?.phone_number || pno;
          if (phoneNumberToStore) {
            localStorage.setItem('phoneNumber', phoneNumberToStore);
            console.log("Stored phone number:", localStorage.getItem("phoneNumber"));
          } else {
            console.warn("Phone number is missing from API and input!");
          }

        } else {
          toast.warning('Token or driver ID missing in response.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        }

        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        navigate('/postloginhome');
        window.location.reload();
      } else {
        toast.error(data.error || 'Failed to verify OTP', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);

      toast.error('Something went wrong. Please try again later.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };


  return (
    <div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-md max-w-md mx-auto my-[13.2rem] ">
      <h2 className="text-2xl font-bold text-gray-800">Enter OTP</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex justify-between max-w-xs mx-auto">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              ref={(input) => inputRefs.current[index] = input}
              aria-label={`Digit ${index + 1} of OTP`}
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Verify OTP
        </button>
      </form>
      <p className="text-sm text-gray-500">Enter the 6-digit code sent to {pno}</p>
    </div>
  )
}