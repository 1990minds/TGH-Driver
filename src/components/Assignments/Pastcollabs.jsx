import React from "react";

// Function to get a random color from the color list
// const getRandomColor = () => {
//   const colors = [
//     'bg-blue-500',  // Blue
//     'bg-green-500', // Green
//     'bg-red-500',   // Red
//     'bg-yellow-500',// Yellow
//     'bg-teal-500',  // Teal
//     'bg-purple-500',// Purple
//     'bg-pink-500',  // Pink
//     'bg-indigo-500',// Indigo
//   ];

//   // Select a random color from the array
//   return colors[Math.floor(Math.random() * colors.length)];
// };

const CollabCard = ({ cafe, date, description, socialMediaImpressions, amount }) => (
  <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6">
    {/* Card Header */}
    <div className="flex flex-wrap justify-between items-start mb-4">
      <h2 className="text-lg font-semibold text-gray-800 max-w-full truncate">{cafe}</h2>
      {/* <p className={`text-sm p-2 rounded-2xl text-white ${getRandomColor()}`}>{date}</p> */}
      <p className={`text-sm p-2 rounded-2xl text-red-500`}>{date}</p>
    </div>

    {/* Card Description */}
    {/* <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p> */}

    {/* Social Media Impressions */}
    {/* <div className="mt-3">
      <span className="text-sm text-gray-600">Social Media Impressions:</span>
      <p className="text-sm font-semibold">{socialMediaImpressions}</p>
    </div> */}

    {/* Card Footer */}
    <div className="mt-4 flex justify-between items-center">
      <span className="text-lg font-bold">${amount}</span>
      <button
        type="button"
        className="px-6 py-2 text-sm font-medium tracking-wide text-white bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        View Details
      </button>
    </div>
  </div>
);

const driverProfilePage = () => {
  const pastCollabs = [
    {
      cafe: "Siliguri to Kolkata",
      date: "September 10, 2024",
      description: "Collaborated with Café Mocha to showcase their signature drinks via Instagram posts and stories.",
      socialMediaImpressions: "500,000",
      amount: "5000.00",
    },
    {
      cafe: "Gangtok to Siliguri",
      date: "August 5, 2024",
      description: "Partnered with The Green Bean to promote their new dessert menu through Instagram reels and stories.",
      socialMediaImpressions: "300,000",
      amount: "8000.00",
    },
    {
      cafe: "Kolkata to Darjeeling",
      date: "July 21, 2024",
      description: "Worked with Brew Brothers for an Instagram campaign featuring their seasonal drinks and coffee specials.",
      socialMediaImpressions: "1,200,000",
      amount: "12000.00",
    },
    {
      cafe: "Gangtok to Kolkata",
      date: "June 30, 2024",
      description: "Collaborated with Latte Art Café for a series of Instagram posts and stories, focusing on latte art and café ambiance.",
      socialMediaImpressions: "250,000",
      amount: "4000.00",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Past Rides</h2>
        <p className="text-lg text-gray-600">Here are some of the Rides You've worked with us in past !</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pastCollabs.map((collab, index) => (
          <CollabCard key={index} {...collab} />
        ))}
      </div>
    </div>
  );
};

export default driverProfilePage;
