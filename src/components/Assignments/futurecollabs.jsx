import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { driverSelector } from "../../api/driver"

// const getRandomColor = () => {
  
//   const colors = [
//     "bg-blue-500", // Blue
//     "bg-green-500", // Green
//     "bg-red-500", // Red
//     "bg-yellow-500", // Yellow
//     "bg-teal-500", // Teal
//     "bg-purple-500", // Purple
//     "bg-pink-500", // Pink
//     "bg-indigo-500", // Indigo
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

const CollabCard = ({ id, cafe, date, description, requirements, amount }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit-collab/${id}`); // Redirect to the edit page with the id
  };


  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6">
      {/* Card Header */}
      <div className="flex flex-wrap justify-between items-start mb-4">
        <h2 className="text-lg font-semibold text-gray-800 max-w-full truncate">{cafe}</h2>
        {/* <p className={`text-sm p-2 rounded-2xl text-white ${getRandomColor()}`}>{date}</p> */}
        <p className={`text-sm p-2 rounded-2xl text-green-500`}>{date}</p>
      </div>

      {/* Card Description */}
      {/* <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p> */}

      {/* Requirements (for future collabs) */}
      {/* {requirements && (
        <div className="mt-3">
          <span className="text-sm text-gray-600">Requirements:</span>
          <p className="text-sm font-semibold">{requirements}</p>
        </div>
      )} */}

      {/* Card Footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">₹{amount}</span>
        {/* <button
          type="button"
          onClick={handleEditClick}
          className="px-6 py-2 text-sm font-medium tracking-wide text-white bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Accept
        </button> */}
      </div>
    </div>
  );
};

const Index = () => {
  const [authStatus, setAuthStatus] = useState(null);
  const [userData, setUserData] = useState(null);
  const { driverAuthenticate } = useSelector(driverSelector);
  const pastCollabs = [
    {
      id: "1",
      cafe: "Café Mocha",
      date: "September 10, 2024",
      description: "Collaborated with Café Mocha to showcase their signature drinks via Instagram posts and stories.",
      socialMediaImpressions: "500,000",
      amount: "5000.00",
    },
    // Add more past collaborations
  ];

  const futureCollabs = [
    {
      id: "2",
      cafe: "Siliguri to Darjeeling",
      date: "January 25, 2025",
      description: "Planned collaboration for launching their Christmas special menu.",
      requirements: "Clean,Hygeine , Without delay pickup",
      amount: "7000.00",
    },
    {
      id: "3",
      cafe: "Siliguri to Gangtok",
      date: "January 25, 2025",
      description: "Planned collaboration for launching their Christmas special menu.",
      requirements: "Clean,Hygeine , Without delay pickup",
      amount: "6000.00",
    },
    {
      id: "4",
      cafe: "Siliguri to Kolkata",
      date: "January 25, 2025",
      description: "Planned collaboration for launching their Christmas special menu.",
      requirements: "Clean,Hygeine , Without delay pickup",
      amount: "9000.00",
    },
    // Add more future collaborations
  ];

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/check-auth", {
          withCredentials: true,
        });
        setAuthStatus(response.data.authenticated);
        setUserData(response.data.user);
      } catch (err) {
        setAuthStatus(false);
        setUserData(null);
      }
    };
    fetchAuthStatus();
  }, []);

  return (
    <>
      {authStatus || driverAuthenticate ? (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-6">
          {/* Past Collaborations */}
          {/* <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Past Collaborations</h2>
            <p className="text-lg text-gray-600">Here are some of the cafes I’ve worked with in past collaborations!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {pastCollabs.map((collab) => (
              <CollabCard key={collab.id} {...collab} />
            ))}
          </div> */}

          {/* Future Collaborations */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Future Rides</h2>
            <p className="text-lg text-gray-600">Exciting Rides for future!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {futureCollabs.map((collab) => (
              <CollabCard key={collab.id} {...collab} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Please log in first!</h1>
        </div>
      )}
    </>
  );
};

export default Index;
