import React, { useState } from "react";
import CustomTripForm from "../components/CustomTripPlanner/CustomTripForm";
import TripSummary from "./TripSummary";

const CustomizeTrip = () => {
  const [tripData, setTripData] = useState(null);
  const [tripConfirmed, setTripConfirmed] = useState(false);

  // Handle trip submission
  const handleTripSubmit = (data) => {
    setTripData(data);
    setTripConfirmed(true); // Show summary only after confirmation
  };

  // Handle edit action
  const handleEditTrip = () => {
    setTripConfirmed(false); // Go back to the form
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full transition-all duration-500">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {tripConfirmed ? "🎉 Trip Summary" : "✈️ Plan Your Custom Trip"}
        </h1>

        {tripConfirmed ? (
          <div>
            {/* Show Trip Summary */}
            <TripSummary tripData={tripData} />

            {/* Edit Trip Button */}
            <button
              className="mt-6 px-6 py-3 w-full bg-yellow-500 text-lg font-bold text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
              onClick={handleEditTrip}
            >
              ✏️ Edit Trip
            </button>
          </div>
        ) : (
          <CustomTripForm onSubmit={handleTripSubmit} />
        )}
      </div>
    </div>
  );
};

export default CustomizeTrip;
