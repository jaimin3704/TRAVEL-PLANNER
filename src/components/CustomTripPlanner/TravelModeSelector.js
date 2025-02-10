import React, { useState } from "react";

const travelModes = [
  { label: "Flight", icon: "✈️" },
  { label: "Train", icon: "🚆" },
  { label: "Bus", icon: "🚌" },
  { label: "Car", icon: "🚗" },
];

const TravelModeSelector = ({ onSelect }) => {
  const [selectedMode, setSelectedMode] = useState("");

  const handleSelect = (mode) => {
    setSelectedMode(mode);
    onSelect(mode);
  };

  return (
    <div className="travel-mode-selector bg-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">🚀 Select Travel Mode:</h3>

      <div className="grid grid-cols-2 gap-3">
        {travelModes.map((mode, index) => (
          <button
            key={index}
            className={`px-4 py-3 text-lg font-bold rounded-lg shadow-md transition duration-300 ${
              selectedMode === mode.label
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => handleSelect(mode.label)}
          >
            {mode.icon} {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TravelModeSelector;
