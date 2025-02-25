import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/TGH logo_Mesa de trabajo 1.png";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { driverSelector, logout } from '../../api/driver';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-daisyui';
import { Headset } from 'lucide-react';


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setuser] = useState({});
  const [authStatus, setAuthStatus] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const { driverAuthenticate } = useSelector(driverSelector)
  console.log(driverAuthenticate);
  const dispatch = useDispatch()



  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((response) => {
        setuser(response.data.user)
        console.log("Whole Response", response.data.authenticated);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])


  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/check-auth', { withCredentials: true });
        setAuthStatus(response.data.authenticated);
        setUserData(response.data.user);
        setError(null);
      } catch (err) {
        setAuthStatus(false);
        setUserData(null);
        setError(err.response?.data?.message || 'An error occurred');
      }
    };

    fetchAuthStatus();
  }, []);
  console.log(user)
  const profilepic = user?._json?.picture
  console.log(profilepic)




  const loginUser = () => {
    console.log("login triggered");
    navigate("/signup")
  }


  const handlehelp = () => {
    console.log("Help clicked")
    window.location.href = `tel:+919886562702`;
  }
  const logoutUser = async () => {
    console.log("Logout triggered");

    try {
      const response = await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true, // Include cookies if your authentication uses them
      });
      localStorage.clear();
      dispatch(logout());
      // navigate("/home")
      console.log("Whole Response:", response);
      // setAuthStatus(false);

      navigate("/")

      if (response.status === 200) {
        setuser(null); // Clear the user state or handle logout accordingly
        console.log("Logout successful!")

      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };


  return (
    <div className='w-full sticky top-0 z-50 bg-gray-50  '>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3 st">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to={authStatus || driverAuthenticate ? "/profile" : "/product"}
                aria-label={authStatus || driverAuthenticate ? "Your Profile" : "Our Product"}
                title={authStatus || driverAuthenticate ? "Your Profile" : "Our Product"}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {authStatus || driverAuthenticate ? "Profile" : "Product"}
              </Link>
            </li>
            <li>
              <Link
                to={authStatus || driverAuthenticate ? "/cafes" : "/features"}
                aria-label={authStatus || driverAuthenticate ? "Cafes" : "Features"}
                title={authStatus || driverAuthenticate ? "Cafes" : "Features"}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {authStatus || driverAuthenticate ? "Cafes" : "Features"}
              </Link>
            </li>
            <li>
              <Link
                to={authStatus || driverAuthenticate ? "/collabs" : "/pricing"}
                aria-label={authStatus || driverAuthenticate ? "Collaborations" : "Product pricing"}
                title={authStatus || driverAuthenticate ? "Collaborations" : "Product pricing"}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {authStatus || driverAuthenticate ? "Collabs" : "AboutUs "}
              </Link>
            </li>
          </ul>
          <Link
            href="/"
            aria-label="StarSync"
            title="StarSync"
            className="inline-flex items-center lg:mx-auto"
          >

            <img src={Logo} className='w-32 h-18'></img>

          </Link>
          <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <Link
                to="/signin"
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 ${authStatus || driverAuthenticate ? 'hidden' : ""
                  }`}
              >
                Sign In
              </Link>
            </li>
            <li>
              {/* <Link
                onClick={()=>{
                  authStatus ? logoutUser() : loginUser()

                }}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                {
                  authStatus ? "Logut" : "Sign in"
                }
              </Link> */}
              <button
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-[#3B82F7] hover:[#0223f5] focus:shadow-outline focus:outline-none"
                onClick={() => {
                  // Trigger the action based on authStatus
                  driverAuthenticate || authStatus ? logoutUser() : loginUser();
                }}
                aria-label="Sign up"
                title="Sign up"
              >

                {authStatus || driverAuthenticate ? "Logout" : "Register"}

              </button>

            </li>
          </ul>
          <div className="ml-auto lg:hidden">
            <div>
              <img src={profilepic} className='rounded-full h-12'>
              </img>
              <button

                className="bg-white rounded-full border border-black px-4 py-2 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                onClick={handlehelp}
                aria-label="Get Help"
              >
                <p className="text-black">Help</p>
                <Headset className="h-4 w-4"/>
              </button>




            </div>

          </div>
        </div>
      </div></div>
  );
};

export default Nav