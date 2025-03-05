import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { fetchdriverlogin, driverSelector } from "../../api/driver";

function BasicForm() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { driver, isAuthenticate, loading, error,driverAuthenticate} = useSelector(driverSelector);

  useEffect(() => {
    if (driverAuthenticate) {
      navigate("/");
    }
  }, [driverAuthenticate, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidIdentifier(formData.identifier)) {
      toast.error("Invalid email or phone number");
      return;
    }

    if (formData.password.trim() === "") {
      toast.error("Password is required");
      return;
    }
const data ={
  identifier: formData.identifier,
  password: formData.password
}
    dispatch(fetchdriverlogin(data));
  };

  const isValidIdentifier = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[0-9]{10}$/.test(value);
 console.log("hwsdhjwahdjawhdjkbhaw",driverAuthenticate)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-600">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email or 10-digit phone number"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default BasicForm;
