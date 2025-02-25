// import React from 'react'
// import {useParams} from 'react-router-dom'


// const Bookingdetails = () => {
//     const {rideid} = useParams()
//     console.log(rideid)
    
//   return (
//     <div>Bookingdetails</div>
//   )
// }

// export default Bookingdetails

import React from "react";
import { Card } from "../ui/card"; // Assuming you are using a UI library

const DriverBookingDetails = () => {
  const customer = {
    name: "Rajesh",
    pickup: "Bus Stand, Bangalore",
    dropoff: "BR Station, Bellary",
    phone: "+91 9876543210",
    seats: ["F1", "M1", "M2"],
    fare: 499,
    booking_status: "Confirmed",
  };

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${customer.phone.replace("+", "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-100 p-6 flex-1  justify-center ">
      <Card className="max-w-lg w-full h-auto max-h-[500px] mt-3 bg-white p-4 shadow-md rounded-lg overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>

        <div className="space-y-3">
          <p><strong>Customer Name:</strong> {customer.name}</p>
          <p><strong>Pickup Location:</strong> {customer.pickup}</p>
          <p><strong>Drop-off Location:</strong> {customer.dropoff}</p>
          <p>
            <strong>Phone No:</strong>{" "}
            <span
              className="text-[#9999ff] cursor-pointer underline"
              onClick={handleWhatsAppRedirect}
            >
              {customer.phone}
            </span>
          </p>
          <p><strong>Selected Seats:</strong> {customer.seats.join(", ")}</p>
          <p><strong>Fare:</strong> ₹{customer.fare}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`font-bold ${customer.booking_status === "Completed" ? "text-green-600" : "text-red-600"}`}>
              {customer.booking_status}
            </span>
          </p>
        </div>
      </Card>
      <Card className="max-w-lg w-full h-auto max-h-[500px] mt-3 bg-white p-4 shadow-md rounded-lg overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>

        <div className="space-y-3">
          <p><strong>Customer Name:</strong> {customer.name}</p>
          <p><strong>Pickup Location:</strong> {customer.pickup}</p>
          <p><strong>Drop-off Location:</strong> {customer.dropoff}</p>
          <p>
            <strong>Phone No:</strong>{" "}
            <span
              className="text-[#9999ff] cursor-pointer underline"
              onClick={handleWhatsAppRedirect}
            >
              {customer.phone}
            </span>
          </p>
          <p><strong>Selected Seats:</strong> {customer.seats.join(", ")}</p>
          <p><strong>Fare:</strong> ₹{customer.fare}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`font-bold ${customer.booking_status === "Completed" ? "text-green-600" : "text-red-600"}`}>
              {customer.booking_status}
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DriverBookingDetails;
