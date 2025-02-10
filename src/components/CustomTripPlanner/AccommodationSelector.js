import React, { useState } from "react";

const accommodations = [
  { name: "Budget Hotel", icon: "🏨", description: "Affordable and simple lodging." },
  { name: "3-Star", icon: "🌟🌟🌟", description: "Comfortable stay with basic amenities." },
  { name: "5-Star", icon: "🌟🌟🌟🌟🌟", description: "Luxury experience with top-tier services." },
  { name: "Resort", icon: "🏝️", description: "Perfect for a relaxing vacation." },
  { name: "Homestay", icon: "🏠", description: "Live like a local in cozy homes." },
];

const AccommodationSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (acc) => {
    setSelected(acc.name);
    onSelect(acc.name);
  };

  return (
    <div className="accommodation-selector bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">🏡 Choose Your Accommodation:</h3>

      {/* Accommodation Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {accommodations.map((acc) => (
          <div
            key={acc.name}
            onClick={() => handleSelect(acc)}
            className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center transition-all duration-300 
              ${selected === acc.name ? "bg-blue-500 text-white border-blue-700 shadow-md" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            <span className="text-3xl">{acc.icon}</span>
            <p className="mt-2 font-semibold">{acc.name}</p>
            <p className="text-xs text-center">{acc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationSelector;
