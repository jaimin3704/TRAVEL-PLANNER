import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FlightDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;
  const selectedPlan = location.state?.selectedPlan || null;
  const totalAmount = location.state?.totalAmount || flight?.price || 0;
  
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!flight) {
    return <p className="text-center text-lg font-semibold text-red-500 mt-6">No flight selected</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Flight & Insurance Summary</h2>

        {/* Flight Details */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">✈️ Flight Details</h3>
          <p className="text-lg"><strong>Airline:</strong> {flight.airline}</p>
          <p className="text-lg"><strong>Price:</strong> ₹{flight.price}</p>
          <p className="text-lg"><strong>Duration:</strong> {flight.duration}</p>
          <p className="text-lg"><strong>Stops:</strong> {flight.stops} Stop(s)</p>
        </div>

        {/* Insurance Details */}
        {selectedPlan && (
          <div className="p-6 mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700">✅ Selected Insurance Plan</h3>
            <p className="text-lg"><strong>Plan:</strong> {selectedPlan.title}</p>
            <p className="text-lg"><strong>Coverage:</strong> {selectedPlan.details}</p>
            <p className="text-lg"><strong>Price:</strong> ₹{selectedPlan.price}</p>
          </div>
        )}

        {/* Total Price Section */}
        <div className="p-4 mt-6 bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-md text-lg font-medium text-gray-800">
          <p><strong>Flight Price:</strong> ₹{flight.price}</p>
          {selectedPlan && <p><strong>Insurance Price:</strong> ₹{selectedPlan.price}</p>}
          <p className="text-xl font-bold text-blue-700 mt-2">Total Amount: ₹{totalAmount}</p>
        </div>

        {/* Confirmation Popup */}
        {showConfirmation && (
          <div className="p-6 mt-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
            <p className="text-lg font-semibold text-yellow-800">Are you sure you want to proceed to checkout?</p>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg"
                onClick={() => navigate('/payment', { state: { flight, selectedPlan, totalAmount } })}
              >
                Yes, Proceed
              </button>
              <button
                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-lg"
                onClick={() => setShowConfirmation(false)}
              >
                No, Go Back
              </button>
            </div>
          </div>
        )}

        {/* Proceed Button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 text-lg"
            onClick={() => setShowConfirmation(true)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
