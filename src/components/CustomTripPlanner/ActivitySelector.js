import React, { useState } from "react";

const activitiesList = [
  { name: "Trekking", icon: "🥾" },
  { name: "Sightseeing", icon: "📸" },
  { name: "Beach", icon: "🏖️" },
  { name: "Adventure Sports", icon: "⛷️" },
  { name: "Shopping", icon: "🛍️" },
  { name: "Relaxing", icon: "🧘" },
];

const ActivitySelector = ({ onSelect }) => {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleToggle = (activity) => {
    let updatedList = [...selectedActivities];
    if (updatedList.includes(activity)) {
      updatedList = updatedList.filter((item) => item !== activity);
    } else {
      updatedList.push(activity);
    }
    setSelectedActivities(updatedList);
    onSelect(updatedList);
  };

  return (
    <div className="activity-selector bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">🎭 Choose Your Activities:</h3>

      {/* Activity Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {activitiesList.map((activity) => (
          <button
            key={activity.name}
            onClick={() => handleToggle(activity.name)}
            className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300
              ${selectedActivities.includes(activity.name) ? "bg-blue-500 text-white border-blue-700 shadow-md" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            <span className="text-2xl">{activity.icon}</span>
            <p className="font-semibold">{activity.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivitySelector;
