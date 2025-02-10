import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flightData from './flightData';

const FlightResults = () => {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);

  const handleFlightSelection = (flight) => {
    navigate('/flight-details', { state: { flight } });
  };

  const handleInsuranceOffer = (flight) => {
    setSelectedFlight(flight);
    setShowInsuranceModal(true);
  };
  const confirmInsurance = () => {
    setShowInsuranceModal(false);
    navigate('/insurance-details', { state: { flight: selectedFlight } });
  };

  return (
    <div className="flight-results pt-24 pb-12 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-semibold text-center text-blue-700 mb-8">
        Available Flights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {flightData.map((flight) => (
          <div
            key={flight.id}
            className="flight-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-600">{flight.airline}</h3>
            <p className="text-gray-700">
              <span className="font-medium">Price:</span> ₹{flight.price}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Duration:</span> {flight.duration}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Stops:</span> {flight.stops} Stop(s)
            </p>

            {/* Flight Selection Button */}
            <button
              className="w-full py-3 px-4 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              onClick={() => handleFlightSelection(flight)}
            >
              Select Flight & Proceed to Pay
            </button>

            {/* Insurance Selection Button */}
            <button
              className="w-full py-3 px-4 mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => handleInsuranceOffer(flight)}
            >
              Add Travel Insurance
            </button>
          </div>
        ))}
      </div>

      {/* Insurance Confirmation Modal */}
      {showInsuranceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to add travel insurance?</h3>
            <p className="text-gray-600 mb-6">Protect your trip with exclusive insurance benefits.</p>

            <div className="flex justify-center gap-4">
              <button
                className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={confirmInsurance}
              >
                Yes, Proceed
              </button>
              <button
                className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => setShowInsuranceModal(false)}
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightResults;
