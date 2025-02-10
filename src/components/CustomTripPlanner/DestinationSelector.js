import React, { useState } from "react";

const destinations = [
  { name: "Shimla", image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww" },
  { name: "Manali", image: "https://i.pinimg.com/474x/fd/5d/72/fd5d72dfd8712e4741b3ddfcaec0742b.jpg" },
  { name: "Goa", image: "https://i.pinimg.com/474x/fe/c0/fb/fec0fb1c9a2a70f4812e3fe9ddc88d86.jpg" },
  { name: "Jaipur", image: "https://i.pinimg.com/474x/dd/94/49/dd9449814cc77e7d5398651679bf4707.jpg" },
  { name: "Kerala", image: "https://i.pinimg.com/474x/5c/cf/c4/5ccfc4bf64f290edd3651e6d2ef23f7b.jpg" },
  { name: "Mumbai", image: "https://i.pinimg.com/474x/19/da/e7/19dae7ddb77be5deadc49287c19f352e.jpg" },
];

const DestinationSelector = ({ onSelect }) => {
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleSelect = (destination) => {
    setSelectedDestination(destination);
    onSelect(destination);
  };

  return (
    <div className="destination-selector bg-white p-5 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">🌍 Select Your Destination:</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105 ${
              selectedDestination === dest.name
                ? "border-4 border-blue-600 bg-blue-100"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => handleSelect(dest.name)}
          >
            <img src={dest.image} alt={dest.name} className="rounded-md mb-2 w-full h-24 object-cover" />
            <p className="text-center font-bold">{dest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSelector;
