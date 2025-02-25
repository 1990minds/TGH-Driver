import React, { useState } from 'react';

const AssignmentForm = () => {
    const [formData, setFormData] = useState({
        cafe: '',
        driver: '',
        assignedDate: '',
        visitDate: '',
        dealAmount: '',
        paidStatus: false,
        comments: '',
        collabStatus: 'Pending',
        transactionId: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({}); // Track errors for validation

    const steps = ['Details', 'Collaboration Info', 'Comments & Status'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateStep = () => {
        const newErrors = {};

        if (currentStep === 1) {
            if (!formData.cafe) newErrors.cafe = 'Cafe is required';
            if (!formData.driver) newErrors.driver = 'driver is required';
        } else if (currentStep === 2) {
            if (!formData.assignedDate) newErrors.assignedDate = 'Assigned Date is required';
            if (!formData.visitDate) newErrors.visitDate = 'Visit Date is required';
            if (!formData.dealAmount) newErrors.dealAmount = 'Deal Amount is required';
        } else if (currentStep === 3) {
            if (!formData.comments) newErrors.comments = 'Comments are required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            console.log('Form Submitted:', formData);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-4">
            <div className="w-full max-w-3xl bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border-2 border-gray-300 mt-12 overflow-hidden">
                {/* Step Indicator */}
                <div className="flex flex-wrap justify-between mb-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`w-full sm:w-auto sm:grid lg:flex-1 text-center font-medium text-lg px-4 py-2 rounded-lg mx-1 mb-2 sm:mb-0 ${index + 1 <= currentStep
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                        <div>
                            {/* Step 1: Details */}
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Details</h3>
                            <div className="mb-6">
                                <label htmlFor="cafe" className="block text-lg font-medium text-gray-600 mb-2">Cafe</label>
                                <input
                                    type="text"
                                    id="cafe"
                                    name="cafe"
                                    value={formData.cafe}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.cafe ? 'border-red-500' : ''}`}
                                    placeholder="Enter Cafe Name"
                                />
                                {errors.cafe && <p className="text-red-500 text-sm">{errors.cafe}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="driver" className="block text-lg font-medium text-gray-600 mb-2">driver</label>
                                <input
                                    type="text"
                                    id="driver"
                                    name="driver"
                                    value={formData.driver}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.driver ? 'border-red-500' : ''}`}
                                    placeholder="Enter driver Name"
                                />
                                {errors.driver && <p className="text-red-500 text-sm">{errors.driver}</p>}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            {/* Step 2: Collaboration Info */}
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Collaboration Info</h3>
                            <div className="mb-6">
                                <label htmlFor="assignedDate" className="block text-lg font-medium text-gray-600 mb-2">Assigned Date</label>
                                <input
                                    type="date"
                                    id="assignedDate"
                                    name="assignedDate"
                                    value={formData.assignedDate}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.assignedDate ? 'border-red-500' : ''}`}
                                />
                                {errors.assignedDate && <p className="text-red-500 text-sm">{errors.assignedDate}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="visitDate" className="block text-lg font-medium text-gray-600 mb-2">Visit Date</label>
                                <input
                                    type="date"
                                    id="visitDate"
                                    name="visitDate"
                                    value={formData.visitDate}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.visitDate ? 'border-red-500' : ''}`}
                                />
                                {errors.visitDate && <p className="text-red-500 text-sm">{errors.visitDate}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="dealAmount" className="block text-lg font-medium text-gray-600 mb-2">Deal Amount</label>
                                <input
                                    type="text"
                                    id="dealAmount"
                                    name="dealAmount"
                                    value={formData.dealAmount}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.dealAmount ? 'border-red-500' : ''}`}
                                    placeholder="Enter Deal Amount"
                                />
                                {errors.dealAmount && <p className="text-red-500 text-sm">{errors.dealAmount}</p>}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            {/* Step 3: Comments & Status */}
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Comments & Status</h3>
                            <div className="mb-6">
                                <label htmlFor="comments" className="block text-lg font-medium text-gray-600 mb-2">Comments</label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.comments ? 'border-red-500' : ''}`}
                                    placeholder="Enter Comments"
                                />
                                {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="collabStatus" className="block text-lg font-medium text-gray-600 mb-2">Collaboration Status</label>
                                <select
                                    id="collabStatus"
                                    name="collabStatus"
                                    value={formData.collabStatus}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Ongoing">Ongoing</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="bg-gray-600 text-white px-4 py-2 rounded-xl"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < steps.length ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-2 rounded-xl"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignmentForm;
