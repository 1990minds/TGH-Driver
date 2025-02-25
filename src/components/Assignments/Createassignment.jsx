import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectHotelState,fetchAllHotels} from "../../api/Hotel";
import { createassignment } from '../../api/assignments';
// import {driver} from "../../api/driver"

const AssignmentForm = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(selectHotelState);
    console.log(hotels)
   const  driver = localStorage.getItem("driver") || null;

    const [formData, setFormData] = useState({
        cafe: '',
        driver: '',
        assignedDate: '',
        visitDate: '',
        dealAmount: '',
    });
    // const hotels = useSelector((state) => state.hotels.list);

    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.driver = driver
        console.log('Form Submitted:', formData);
        try {
            await dispatch(createassignment(formData));
            alert('Form submitted successfully');
            window.location.reload()
          } catch (error) {
            console.error('Error submitting assignment:', error);
            alert('Submission failed. Please check your inputs and try again.');
          }
    };
    useEffect(()=>{
        dispatch(fetchAllHotels());

    },[])

    return (
        <div className=" flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 pb-10">
            <div className="w-full max-w-2xl bg-white p-[3.8rem] rounded-xl shadow-2xl border-2 border-gray-300 mt-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Unavailability</h2>

                <form onSubmit={handleSubmit}>
                    {/* Cafe Selection */}
                 
                     {/* <div className="mb-6">
                        <label htmlFor="cafe" className="block text-lg font-medium text-gray-600 mb-2">Cafe</label>
                        <select
                            id="cafe"
                            name="cafe"
                            value={formData.cafe}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 max-h-36 overflow-y-auto"
                            // style={{ maxHeight: '150px', overflowY: 'scroll' }} // Fixed height with scrollbar
                        >
                            <option value="" disabled>Select Cafe</option>
                            {hotels?.map((hotel, index) => (
                                <option key={index} value={hotel?._id}>
                                    {hotel?.cafename}
                                </option>
                            ))}
                        </select>
                    </div> */}

                    {/* Assigned Date */}
                    <div className="mb-6">
                        <label htmlFor="assignedDate" className="block text-lg font-medium text-gray-600 mb-2">From Date</label>
                        <input
                            type="date"
                            id="assignedDate"
                            name="assignedDate"
                            value={formData.assignedDate}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Visit Date */}
                    <div className="mb-6">
                        <label htmlFor="visitDate" className="block text-lg font-medium text-gray-600 mb-2">To Date</label>
                        <input
                            type="date"
                            id="visitDate"
                            name="visitDate"
                            value={formData.visitDate}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Deal Amount */}
                    <div className="mb-6">
                        <label htmlFor="dealAmount" className="block text-lg font-medium text-gray-600 mb-2">Reason</label>
                        <input
                            type="text"  // Changed to text
                            id="dealAmount"
                            name="dealAmount"
                            value={formData.dealAmount}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only numbers and decimal points
                                if (/^\d*\.?\d*$/.test(value)) {
                                    handleChange(e);  // Your handleChange function
                                }
                            }}
                            className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Reason"
                            pattern="^\d*\.?\d*$"  // Regular expression to allow float and integer numbers
                        />
                    </div>
                    <div className="mb-6 text-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-indigo-700 hover:to-purple-700 transition duration-300"
                        >
                            Set Unavailability
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignmentForm;
