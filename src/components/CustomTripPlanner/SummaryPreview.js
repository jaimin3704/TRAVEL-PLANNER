import React from "react";
import { useNavigate } from "react-router-dom";


const SummaryPreview = ({ tripData = {} }) => {
  const navigate = useNavigate();

  return (
    <div className="summary-preview-container">
      <h2 className="text-center text-2xl font-bold mb-4">📌 Trip Summary Preview</h2>
      
      <div className="summary-box bg-white p-5 rounded-lg shadow-md">
        <p><strong>🌍 Destination:</strong> {tripData.destination || "Not selected"}</p>
        <p><strong>🎭 Activities:</strong> {tripData.activities?.length ? tripData.activities.join(", ") : "None selected"}</p>
        <p><strong>🚗 Travel Mode:</strong> {tripData.travelMode || "Not selected"}</p>
        <p><strong>🏨 Accommodation:</strong> {tripData.accommodation || "Not selected"}</p>
        <p className="text-green-600 font-bold"><strong>💰 Estimated Budget:</strong> ₹{tripData.budget > 0 ? tripData.budget : "Not set"}</p>
      </div>

      <button
        className="mt-5 px-5 py-3 w-full bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        onClick={() => navigate("/trip-summary", { state: { tripData } })}
      >
        ✅ Finalize Trip
      </button>
    </div>
  );
};

export default SummaryPreview;
