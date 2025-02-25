import React, { useEffect, useState } from "react";
import {
  Bell,
  IdCard,
  CircleGauge,
  Wallet,
  Route,
  UserRoundPen,
  LogOut,
} from "lucide-react";
import Profile from "../../assets/3d-illustration-cartoon-character-hoodie-cap.jpg";
import { useDispatch, useSelector } from "react-redux";
import { driverSelector, logOut } from "../../api/driver";
import axios from "axios";
import { keyUri } from "../../key";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { driver } = useSelector(driverSelector);
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("usr roi user hoai", user?._json?.email);
        const user_phone = localStorage.getItem("phoneNumber")
          ? localStorage.getItem("phoneNumber")
          : null;
        console.log(user_phone);

        if (user_phone) {
          const response = await axios.post(
            `${keyUri.BACKEND_URI}/api/getdriverfromphone`,
            { phone: user_phone }
          );
          console.log("API response 🎈🎃🎠", response.data);
          localStorage.setItem("Driver", response.data.driver._id);
          setUserData(response?.data?.driver);
          localStorage.setItem("authToken", response.data.token);
        } else {
          console.error("phone number is not available.");
        }
      } catch (err) {
        console.error("Error occurred while creating driver:", err);
      }
    };

    fetchData();
  }, []);
  console.log(userData);
  const handleclick = async (item) => {
    if (item === "Performance") {
      console.log("Clicked Performance");
    } else if (item === "My UPI ID") {
      console.log("clicked My UPI ID");
    } else if (item === "TGH ID Card") {
      console.log("clicked TGH ID Card");
    } else if (item === "Documents") {
      console.log("clicked Documents");
    } else if (item === "Notification") {
      console.log("clicked Notification");
    } else if (item === "Log out") {
      console.log("clicked Log out");
      dispatch(logOut());
  
      
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="bg-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-black text-3xl font-medium">Profile</span>
        </div>
        <div className="flex">
          <button
            className="text-black flex items-center gap-2"
            aria-label="Edit"
          >
            <UserRoundPen className="w-5 h-5" />
            <span>Edit</span>
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-start gap-4 mb-6">
          <img src={Profile} alt="Profile" className="rounded-full w-16 h-16" />
          <div>
            <h2 className="text-lg font-medium">{userData?.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{userData?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#FFF4DE] p-2 rounded-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="#FFB340"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-500">Balance</span>
            </div>
            <span className="text-xl font-semibold">
              ₹{parseFloat(userData?.wallet_amount?.$numberDecimal)}
            </span>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Route className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-500">Rides</span>
            </div>
            <span className="text-xl font-semibold">23</span>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4 mb-6">
          <p className="text-sm font-semibold text-gray-600">
            Driving Licence Number - {userData?.Driver_licence_number}
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Other Details</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <IdCard className="w-5 h-5" />, label: "TGH ID Card" },
              {
                icon: <CircleGauge className="w-5 h-5" />,
                label: "Performance",
              },
              { icon: <Wallet className="w-5 h-5" />, label: "Documents" },
              {
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 9H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 12H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="4"
                      y="4"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                label: "My UPI ID",
              },
              { icon: <Bell className="w-5 h-5" />, label: "Notification" },
              { icon: <LogOut className="w-5 h-5" />, label: "Log out" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-xl gap-2"
                aria-label={item.label}
                onClick={() => handleclick(item.label)}
              >
                <div className="text-gray-600">{item.icon}</div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
