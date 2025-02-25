import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createdrivers } from "../../api/driver";

function BasicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for empty fields
    if (!formData.name || !formData.email || !formData.phone_number) {
      setAlertMessage("Please fill out all fields.");
      setShowAlert(true);
  
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
      return; // Exit early if fields are empty
    }

    formData.email= formData?.email.toLowerCase()
  
    try {
      // Dispatch the createdrivers action
      await dispatch(createdrivers(formData));

      navigate("/signin")
  
      // No need to show component's alert, API will handle notifications
    } catch (error) {
      // Optionally log the error for debugging
      console.error("API Error:", error);
  
      // No need to show error alert, API will handle notifications
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Alert */}
      {showAlert && (
        <div className="absolute top-5 w-full max-w-md">
          <div
            className={`${
              alertMessage.includes("successfully")
                ? "bg-green-100 border-green-400 text-green-700"
                : "bg-red-100 border-red-400 text-red-700"
            } border p-4 rounded-lg shadow-md`}
          >
            <p className="font-bold">
              {alertMessage.includes("successfully") ? "Success" : "Error"}
            </p>
            <pre className="whitespace-pre-wrap">{alertMessage}</pre>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-500 hover:underline transition duration-200"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicForm;
