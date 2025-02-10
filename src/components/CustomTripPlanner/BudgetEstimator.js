import React, { useState } from "react";

const BudgetEstimator = ({ onChange }) => {
  const [budget, setBudget] = useState(5000); // Default budget

  const handleBudgetChange = (value) => {
    const budgetValue = parseInt(value, 10);
    if (!isNaN(budgetValue) && budgetValue >= 1000 && budgetValue <= 1000000) {
      setBudget(budgetValue);
      onChange(budgetValue);
    }
  };

  return (
    <div className="budget-estimator bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">💰 Set Your Budget (₹)</h3>

      {/* Budget Slider */}
      <input
        type="range"
        min="1000"
        max="1000000"
        step="1000"
        value={budget}
        onChange={(e) => handleBudgetChange(e.target.value)}
        className="w-full cursor-pointer accent-blue-500"
      />

      {/* Budget Input Field */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-gray-600">₹</span>
        <input
          type="number"
          min="1000"
          max="1000000"
          step="1000"
          value={budget}
          onChange={(e) => handleBudgetChange(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-lg"
        />
      </div>

      {/* Display Selected Budget */}
      <p className="mt-2 text-gray-700">Selected Budget: <strong>₹{budget.toLocaleString()}</strong></p>
    </div>
  );
};

export default BudgetEstimator;
