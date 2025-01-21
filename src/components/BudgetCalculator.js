import React, { useState } from "react";
import "./BudgetCalculator.css";

const travelPackages = [
  { id: 1, name: "Shimla", baseCost: 20000, hotelCostPerDay: 1500, foodCostPerDay: 800 },
  { id: 2, name: "Manali", baseCost: 22000, hotelCostPerDay: 1800, foodCostPerDay: 900 },
  { id: 3, name: "Agra", baseCost: 15000, hotelCostPerDay: 1200, foodCostPerDay: 700 },
  { id: 4, name: "Varanasi", baseCost: 18000, hotelCostPerDay: 1000, foodCostPerDay: 600 },
  { id: 5, name: "Sikkim", baseCost: 30000, hotelCostPerDay: 2500, foodCostPerDay: 1000 },
  { id: 6, name: "Nainital", baseCost: 25000, hotelCostPerDay: 1700, foodCostPerDay: 800 },
  { id: 7, name: "Ooty", baseCost: 20000, hotelCostPerDay: 1500, foodCostPerDay: 800 },
  { id: 8, name: "Mysore", baseCost: 16000, hotelCostPerDay: 1200, foodCostPerDay: 700 },
  { id: 9, name: "Coorg", baseCost: 22000, hotelCostPerDay: 1500, foodCostPerDay: 800 },
  { id: 10, name: "Kanyakumari", baseCost: 25000, hotelCostPerDay: 2000, foodCostPerDay: 900 },
  { id: 11, name: "Goa", baseCost: 30000, hotelCostPerDay: 2500, foodCostPerDay: 1200 },
  { id: 12, name: "Jaipur", baseCost: 18000, hotelCostPerDay: 1300, foodCostPerDay: 700 },
  { id: 13, name: "Kolkata", baseCost: 20000, hotelCostPerDay: 1500, foodCostPerDay: 800 },
  { id: 14, name: "Darjeeling", baseCost: 25000, hotelCostPerDay: 1700, foodCostPerDay: 900 },
];

const BudgetCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [days, setDays] = useState(1);
  const [includeHotel, setIncludeHotel] = useState(false);
  const [includeFood, setIncludeFood] = useState(false);
  const [budget, setBudget] = useState(0);

  const handlePackageChange = (e) => {
    const packageId = parseInt(e.target.value, 10);
    const selected = travelPackages.find((pkg) => pkg.id === packageId);
    setSelectedPackage(selected);
    setBudget(0); // Reset budget when package changes
  };

  const calculateBudget = () => {
    if (!selectedPackage) {
      alert("Please select a destination.");
      return;
    }

    let totalBudget = selectedPackage.baseCost * days;

    if (includeHotel) {
      totalBudget += selectedPackage.hotelCostPerDay * days;
    }
    if (includeFood) {
      totalBudget += selectedPackage.foodCostPerDay * days;
    }

    setBudget(totalBudget);
  };

  return (
    <div className="budget-container">
      <div className="calculator-card">
        <h1 className="calculator-header">Budget Calculator</h1>
        <div className="input-group">
          <label htmlFor="destination" className="input-label">
            Destination:
          </label>
          <select
            id="destination"
            onChange={handlePackageChange}
            className="input-field"
          >
            <option value="">Select a destination</option>
            {travelPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="days" className="input-label">
            Days:
          </label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            min="1"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeHotel}
              onChange={(e) => setIncludeHotel(e.target.checked)}
            />
            Include Hotel
          </label>
        </div>
        <div className="input-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeFood}
              onChange={(e) => setIncludeFood(e.target.checked)}
            />
            Include Food
          </label>
        </div>
        <button onClick={calculateBudget} className="calculate-button">
          Calculate Budget
        </button>
        {selectedPackage && (
          <div className="package-details">
            <h3>Package Details</h3>
            <p>
              <strong>Base Cost:</strong> ₹{selectedPackage.baseCost}
            </p>
            <p>
              <strong>Hotel Cost/Day:</strong> ₹{selectedPackage.hotelCostPerDay}
            </p>
            <p>
              <strong>Food Cost/Day:</strong> ₹{selectedPackage.foodCostPerDay}
            </p>
          </div>
        )}
        {budget > 0 && (
          <div className="budget-result">
            <h2>Estimated Total Budget: ₹{budget}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetCalculator;
