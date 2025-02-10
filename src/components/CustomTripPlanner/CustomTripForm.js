import React, { useState } from "react";
import DestinationSelector from "./DestinationSelector";
import ActivitySelector from "./ActivitySelector";
import TravelModeSelector from "./TravelModeSelector";
import AccommodationSelector from "./AccommodationSelector";
import BudgetEstimator from "./BudgetEstimator";

import "./CustomTripPlanner.css";


const CustomTripForm = ({ onSubmit }) => {
  const [tripData, setTripData] = useState({
    destination: "",
    activities: [],
    travelMode: "",
    accommodation: "",
    budget: 0,
  });

  const [error, setError] = useState(""); // New state for error messages

  // Handle changes to form fields
  const handleChange = (field, value) => {
    setTripData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError(""); // Reset error when the user makes a change
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!tripData.destination) return setError("❌ Please select a destination!");
    if (tripData.activities.length === 0) return setError("❌ Choose at least one activity!");
    if (!tripData.travelMode) return setError("❌ Please select a travel mode!");
    if (!tripData.accommodation) return setError("❌ Choose an accommodation type!");
    if (tripData.budget <= 0) return setError("❌ Budget must be greater than 0!");

    onSubmit(tripData); // Pass data to parent component
  };

  return (
    <div className="custom-trip-form bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full transition-all">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">✈️ Plan Your Custom Trip</h2>

      {/* Selectors for trip details */}
      <DestinationSelector onSelect={(value) => handleChange("destination", value)} />
      <ActivitySelector onSelect={(value) => handleChange("activities", value)} />
      <TravelModeSelector onSelect={(value) => handleChange("travelMode", value)} />
      <AccommodationSelector onSelect={(value) => handleChange("accommodation", value)} />
      <BudgetEstimator onChange={(value) => handleChange("budget", value)} />

      {/* Error Message */}
      {error && <p className="text-red-600 font-semibold mt-3 text-center">{error}</p>}

      {/* Live Summary Preview */}
      <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">📌 Trip Summary</h3>
        <p><strong>🌍 Destination:</strong> {tripData.destination || "Not selected"}</p>
        <p><strong>🎭 Activities:</strong> {tripData.activities.length > 0 ? tripData.activities.join(", ") : "None selected"}</p>
        <p><strong>🚗 Travel Mode:</strong> {tripData.travelMode || "Not selected"}</p>
        <p><strong>🏨 Accommodation:</strong> {tripData.accommodation || "Not selected"}</p>
        <p><strong>💰 Budget:</strong> {tripData.budget > 0 ? `$${tripData.budget}` : "Not set"}</p>
      </div>

      {/* Confirm Trip Button */}
      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-lg font-bold text-white rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition-all duration-300 w-full"
        onClick={handleSubmit}
      >
        ✅ Confirm Trip
      </button>
    </div>
  );
};

export default CustomTripForm;
