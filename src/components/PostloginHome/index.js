import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { keyUri } from "../../key";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Install from "../pwa/install";
import { bookingSelector, fetchAllbooking } from "../../api/bookings";
import Corolla from "../../assets/2023_toyota_gr_corolla_morizo_edition_4k_8k-t2.jpg";
import Civic from "../../assets/4k-ultra-hd-mustang-sleek-black-gitz2vs9nt2wz9mw.png";
import Mustang from "../../assets/4k-ultra-hd-mustang-sleek-black-gitz2vs9nt2wz9mw.png";
import { fetchAllroute, routeSelector } from "../../api/route";
import { motion } from "framer-motion";
import RouteSelectionModal from "./routeselectionmodal";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { driverSelector, fetchOnedriver } from "../../api/driver";

const handileridedetals = (id) => {
  console.log(id);
};

let deferredPrompt;

const Index = () => {
  const d = new Date(Date.now());
  const date = d.toLocaleDateString("en-GB");
  const weekday = d.toLocaleString("default", { weekday: "long" });
  const user_id = useSelector((state) => state.driver);
  const [loading, setLoading] = useState(true);
  const [installable, setInstallable] = useState(false);

  const handileridedetals = (id) => {
    console.log(id);
    navigate(`/ridedetails/${id}`);
  };
  const products = [
    {
      title: "Banglore To Bellary",
      description: "Description for Ride ",
      price: "499",
      id: "533631sadhqjk ---card 1",
    },
    {
      title: "Bellary To Sirsi",
      description: "Description for Ride ",
      price: "349",

      id: "533631sadhqjk card 2",
    },
    {
      title: "Sirsi To Banglore",
      description: "Description for Ride",
      price: "199",

      id: "533631sadhqjk card 3",
    },
    {
      title: "Banglore To Delhi ",
      description: "Description for Ride",
      price: "899",

      id: "533631sadhqjk card 4",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [user, setUser] = useState({});
  const [authStatus, setAuthStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userid, setUserid] = useState("");
  const { driverAuthenticate,driver } = useSelector((state) => state.driver);
  const [currentDate, setCurrentDate] = useState(new Date());
  // const { all_booking } = useSelector((state) => state.booking);
  console.log(driverAuthenticate);
  const { all_route } = useSelector(routeSelector);
  const { all_booking } = useSelector(bookingSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
const {current_driver} = useSelector(driverSelector)
  const handleseecustomer = (data) => {
    setCustomerDetails(data);
    setIsModalOpen(true);
  };

const driver_id_ = (localStorage.getItem("driverid"))
  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setCustomerDetails(null); // Clear customer data
  };
  
  useEffect(() => {
    const driverid = localStorage.getItem("Driver") 
    // const driver_id_ = localStorage.getItem("driverid")
    console.log("Setting otp's respective login setup",driverid);
    dispatch(fetchAllbooking(driverid));
    dispatch(fetchAllroute());
    dispatch(fetchOnedriver(driver_id_))
    dispatch(fetchAllbooking(driver_id_))
  }, [dispatch]);
useEffect(()=>{
if(driver?._id){
  dispatch(fetchAllbooking(driver?.id));

}
},[driver])
  const handleInstallClick = () => {
    setInstallable(false);
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setInstallable(true);
    };

    const handleAppInstalled = () => {};

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      clearTimeout(timer);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  console.log("all routes are here", all_route);
  const handleCloseClick = () => {
    setInstallable(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("usr roi user hoai", user?._json?.email);
        const user_email = user?._json?.email;

        if (user_email) {
          const response = await axios.post(
            `${keyUri.BACKEND_URI}/api/getguyfrommail`,
            { email: user_email }
          );
          console.log("API response 🎈🎈🎈🎈🎈🎈", response.data);
          localStorage.setItem("driver", response.data.driver._id);
          setUserData(response?.data?.driver);
          localStorage.setItem("authToken", response.data.token);
        } else {
          console.error("Email is not available.");
        }
      } catch (err) {
        console.error("Error occurred while creating driver:", err);
      }
    };

    if (user?._json?.email) {
      fetchData();
    }
  }, [user]);

useEffect(()=>{
  if(!userData){
    setUserData(driver)
  }

},driver)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("usr roi user hoai", user?._json?.email);
        const user_phone = localStorage.getItem("phoneNumber")
          ? localStorage.getItem("phoneNumber")
          : null;
        console.log("user phone number", user_phone);

        if (user_phone) {
          const response = await axios.post(
            `${keyUri.BACKEND_URI}/api/getdriverfromphone`,
            { phone: user_phone }
          );
          console.log("API response 🎈🎃🎠", response.data);
          localStorage.setItem("Driver", response.data.driver._id);
          setUserData(response?.data?.driver );
          localStorage.setItem("authToken", response.data.token);
        } else {
          console.error("phone number is not available.");
        }
      } catch (err) {
        console.error("Error occurred while creating driver:", err);
      }
    };

    if (localStorage.getItem("phoneNumber")) {
      fetchData();
    }
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  console.log("Authentication got it ", authStatus);
  const cookies = document.cookie;
  console.log(cookies);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveRoutes = (routes) => {
    console.log("Selected Routes:", routes);
    setSelectedRoutes(routes);
  };
  const isRideSoon = (rideDate) => {
    const rideDateTime = new Date(rideDate);
    const currentUtcDate = new Date(Date.now());
    console.log("Ride Date", rideDateTime);
    console.log("Today Date", currentUtcDate);

    const timeDiffInMillis = rideDateTime.getTime() - currentUtcDate.getTime();

    const hoursDiff = timeDiffInMillis / (1000 * 60 * 60);
    console.log(`Time Diff (in hours): ${hoursDiff}`);

    return hoursDiff <= 24 ;
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);
  

  const date_in_normal_form = (rideDate) => {
    // Convert the rideDate string to a Date object
    const rideDateObj = new Date(rideDate);

    // Options to format the date
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    // Format the date to the desired format "Sunday, dd-mm-yyyy"
    const formattedDate = rideDateObj
      .toLocaleDateString("en-GB", options)
      .replace(",", "");

    return formattedDate;
  };
  console.log(driver?._id)
  console.log("here is the fkin driver",current_driver)
  console.log("here is user data",userData)

  return (
    <div>
      {console.log(all_booking)}
      {console.log("all booking details", all_booking)}
      {authStatus || driverAuthenticate ? (
        <div>
          <div className="relative bg-gray-900 text-white text-center py-16 ">
            <h2 className="text-4xl font-bold mb-2">Welcome</h2>
            <h2 className="text-4xl font-bold mb-2">{userData?.name || current_driver?.name}</h2>
            <h3 className="text-2xl font-bold mb-6">{`${date}, ${weekday}`}</h3>
            <p className="text-lg font-light mb-6">
              Track all your Rides and keep transactions organized
            </p>
            <form className="flex flex-wrap justify-center w-full gap-4 mt-6">
              <button
                type="button"
                onClick={() => {
                  navigate("/pastcollabs");
                }}
                className="px-6 py-3 text-sm font-medium tracking-wide text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                View Past Rides
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/futurecollabs");
                }}
                className="px-9 py-3 text-sm font-medium tracking-wide text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Future Rides
              </button>
              <button
                onClick={() => {
                  navigate("/createassignment");
                }}
                type="button"
                className="px-8 py-3 text-sm font-medium tracking-wide text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Set Unavailability
              </button>
            </form>
          </div>
          <div className="mt-6 mb-12">
            <h1 className="font-bold text-4xl text-center">Upcoming Rides</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 py-6 w-full max-w-screen-xl mx-auto">
              {all_booking.map((product, index) => (
                <div className="max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product?.route?.name}
                  </h5>
                  {date_in_normal_form(product?.ride_date_and_time)}
                  <p className="text-sm text-gray-500">
                    {isRideSoon(product?.ride_date_and_time) ? (
                      <div>
                        <button
                          className="flex items-center mt-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                          onClick={() => handleseecustomer(product)}
                        >
                          See Customer Details
                          <svg
                            className="-mr-1 ml-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {isModalOpen && (
                          <div
                            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
                            onClick={closeModal}
                          >
                            <div
                              className="bg-white rounded-lg w-96 p-6"
                              onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
                            >
                              <h3 className="text-2xl font-semibold mb-4">
                                Customer Details
                              </h3>
                              {customerDetails ? (
                                <motion.div
                                  className="space-y-4"
                                  initial={{ opacity: 0, rotateX: 90 }}
                                  animate={{
                                    opacity: isVisible ? 1 : 0,
                                    rotateX: 0, 
                                  }}
                                  transition={{ duration: 0.5 }}
                              
                                >
                                  {/* Name */}
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Name:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.userid?.name || "N/A"}
                                    </span>
                                  </div>

                                  {/* Email */}
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Email:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.userid?.email ||
                                        "Not Available"}
                                    </span>
                                  </div>

                                  {/* Phone Number */}
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Phone:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.userid?.phone_number ||
                                        "No Phone Number"}
                                    </span>
                                  </div>
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Pickup Loaction:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.pickup_point }
                                    </span>
                                  </div>
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Drop Location:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.drop_point}
                                    </span>
                                  </div>

                                  {/* Number of Seats */}
                                  <div className="flex items-start space-x-1">
                                    <strong className="text-gray-700">
                                      Number of Seats:
                                    </strong>
                                    <span className="text-gray-900">
                                      {customerDetails?.selected_seats
                                        ?.length || 0}
                                    </span>
                                  </div>

                                  {/* Seat Details (if any seats are selected) */}
                                  {customerDetails?.selected_seats?.length >
                                    0 && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                      <strong className="block text-gray-700">
                                        Seat Numbers:
                                      </strong>
                                      <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                        {customerDetails?.selected_seats?.map(
                                          (seat, index) => (
                                            <motion.li
                                              key={index}
                                              initial={{ x: -10, opacity: 0 }}
                                              animate={{ x: 0, opacity: 1 }}
                                              transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                              }}
                                              className="text-gray-900"
                                            >
                                            0{seat}
                                            </motion.li>
                                          )
                                        )}
                                      </ul>
                                    </motion.div>
                                  )}
                                </motion.div>
                              ) : (
                                <p>No customer data available.</p>
                              )}
                              <button
                                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                onClick={closeModal}
                              >
                                Close
                              </button>
                              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ml-[4.4rem]">
                                Mark As Ride Complete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="bg-gradient-to-r from-[#020024] via-[#ed0b0b] to-[#00d4ff] bg-clip-text text-transparent">
                          <p className="text-sm font-semibold text-red-500 mt-3">
                            You can only view customer details before 24 hours
                            of ride time
                          </p>
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 mb-14">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your Vehicles
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {userData||current_driver?.vehicleId?.map((vehicle, index) => (
                <div
                  key={index}
                  className="flex bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-[26rem] sm:w-96"
                >
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={vehicle?.picture_of_the_vehicle}
                      alt={vehicle.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 ml-4">
                    <div>
                      <h2 className="text-lg font-semibold mb-1">
                        {`${vehicle?.reg_no}`}
                      </h2>
                      <h3 className="text-lg font-semibold mb-1">
                        {`(${vehicle?.brand_and_model_name})`}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Selected Route:{" "}
                        {userData||current_driver?.vehicleId[index]?.route_id?.name}
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
                        onClick={handleOpen}
                      >
                        Set Route
                      </button>
                    </div>
                    <RouteSelectionModal
                      open={open}
                      handleClose={handleClose}
                      routes={all_route}
                      onSave={handleSaveRoutes}
                      vehicleid={vehicle?._id}
                      driver={userData?._id} // Pass the save handler
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          ;
        </div>
      ) : (
        <div>
          <h1>Please login to continue</h1>
        </div>
      )}
      <div>
        <Install
          installable={installable}
          onInstallClick={handleInstallClick}
          onCloseClick={handleCloseClick}
        />
      </div>
    </div>
  );
};

export default Index;
