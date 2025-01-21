// src/components/AlertList.js

import React from "react";

const AlertList = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Travel Alerts</h1>
      <ul>
        <li className="mb-2">Alert 1: Extreme Weather in Region X</li>
        <li className="mb-2">Alert 2: Flight Delays in Region Y</li>
        {/* Add more alerts as necessary */}
      </ul>
    </div>
  );
};

export default AlertList;
