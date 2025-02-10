import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InsuranceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight || {};
  const flightPrice = flight.price || 0; // Get flight price from state (default 0)

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [insurancePrice, setInsurancePrice] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const insurancePlans = [
    { title: "Basic Plan", details: "Covers flight delays, baggage loss, and medical emergencies.", price: 500 },
    { title: "Standard Plan", details: "Includes trip cancellations, accident coverage, and emergency assistance.", price: 1200 },
    { title: "Premium Plan", details: "Covers trip interruptions, high medical coverage, and theft protection.", price: 2500 }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setInsurancePrice(plan.price);
  };

  const handleConfirmInsurance = (confirm) => {
    if (confirm && selectedPlan) {
      navigate('/flight-details', { state: { flight, selectedPlan, totalAmount: flightPrice + insurancePrice } });
    } else {
      setShowConfirmation(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Travel Insurance Plans</h2>

        <p className="text-gray-700 mb-6 text-center text-lg">
          Secure your trip with our <span className="font-semibold">travel insurance</span> for your flight with <strong>{flight.airline || "your selected airline"}</strong>.
        </p>

        <div className="space-y-6">
          {insurancePlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-md bg-gray-50 cursor-pointer transition-all 
              ${selectedPlan?.title === plan.title ? "border-blue-600 bg-blue-50" : "hover:border-blue-400"}`}
              onClick={() => handlePlanSelect(plan)}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-2">{plan.details}</p>
              <p className="font-medium text-blue-600 text-lg">₹{plan.price}</p>
            </div>
          ))}
        </div>

        {/* Show Selected Plan Price & Total */}
        {selectedPlan && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-green-700">Selected Plan: {selectedPlan.title}</p>
            <p className="text-md text-gray-700">Insurance Price: ₹{insurancePrice}</p>
            <p className="text-md text-gray-700">Flight Price: ₹{flightPrice}</p>
            <p className="text-lg font-bold text-blue-700">Total: ₹{flightPrice + insurancePrice}</p>
          </div>
        )}

        {/* Confirmation Popup */}
        {showConfirmation && selectedPlan && (
          <div className="p-6 mt-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
            <p className="text-yellow-800 font-semibold text-lg">Are you sure you want to add {selectedPlan.title}?</p>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg"
                onClick={() => handleConfirmInsurance(true)}
              >
                Yes, Add Insurance
              </button>
              <button
                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-lg"
                onClick={() => handleConfirmInsurance(false)}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Proceed Button */}
        <div className="flex justify-center mt-8">
          <button
            className={`px-8 py-3 rounded-full text-lg shadow-md 
            ${selectedPlan ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
            onClick={() => setShowConfirmation(true)}
            disabled={!selectedPlan}
            aria-label="Proceed to payment with insurance"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
