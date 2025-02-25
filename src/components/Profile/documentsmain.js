import React from "react";
import { MapPin } from "lucide-react"; // Using Lucide React for icons

const LocationList = () => {
  const locations = [
    { id: 1, name: "Majestic Bus Stand", link: "https://maps.google.com/?q=Majestic+Bus+Stand" },
    { id: 2, name: "MG Road", link: "https://maps.google.com/?q=MG+Road" },
    { id: 3, name: "Electronic City", link: "https://maps.google.com/?q=Electronic+City" },
    { id: 4, name: "Indiranagar", link: "https://maps.google.com/?q=Indiranagar" },
    { id: 5, name: "Koramangala", link: "https://maps.google.com/?q=Koramangala" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location List</h2>

      <div className="w-full max-w-lg bg-white p-4 shadow-md rounded-lg">
        <ul className="space-y-3">
          {locations.map((location) => (
            <li
              key={location.id}
              className="flex items-center justify-between p-3 border rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">{location.name}</span>
              </div>
              <a
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Map
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationList;
