import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import FlightResults from './FlightResults';
import FlightDetails from './FlightDetails';
import Payment from './Payment';
import './FlightBooking.css';

const FlightBooking = () => {
  const [step, setStep] = useState(1);
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (data) => {
    if (!data.origin || !data.destination || !data.departureDate) {
      setError('Please fill in all the required details.');
      return;
    }
    setFlights(mockFlightsData);
    setStep(2);
    setError('');
  };

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
    setStep(3);
  };

  const resetBooking = () => {
    setStep(1);
    setFlights([]);
    setSelectedFlight(null);
    setError('');
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <div className="flight-booking mt-16 flex flex-col items-center">
      <h1 className="header-title text-center text-3xl font-bold mt-4 mb-6">
        Flight Booking
      </h1>

      {/* Step Indicator */}
      <div className="step-indicator bg-gray-100 p-2 rounded-lg">
        <p className="font-medium">
          Step <span>{step}</span> of 4
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-overlay">
          <div className="error-message">
            <p>{error}</p>
            <button onClick={handleCloseError}>OK</button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 w-full max-w-3xl">
        <div className="card shadow-lg p-6 bg-white rounded-lg">
          {/* Step 1 - Flight Search */}
          {step === 1 && <FlightSearch onSearch={handleSearch} />}
          
          {/* Step 2 - Flight Results */}
          {step === 2 && (
            <FlightResults 
              flights={flights} 
              onSelectFlight={handleFlightSelection} 
            />
          )}
          
          {/* Step 3 - Flight Details */}
          {step === 3 && (
            <FlightDetails 
              flight={selectedFlight} 
              onProceedToPayment={() => setStep(4)} 
            />
          )}
          
          {/* Step 4 - Payment */}
          {step === 4 && (
            <Payment 
              flight={selectedFlight} 
              onPaymentSuccess={resetBooking} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mockFlightsData = [
  { id: 1, airline: 'Air India', price: 5000, duration: '4h 30m', departure: '2025-03-15T09:00:00', arrival: '2025-03-15T13:30:00' },
  { id: 2, airline: 'IndiGo', price: 3500, duration: '5h', departure: '2025-03-16T10:00:00', arrival: '2025-03-16T15:00:00' },
  { id: 3, airline: 'SpiceJet', price: 3200, duration: '4h 45m', departure: '2025-03-17T12:00:00', arrival: '2025-03-17T16:45:00' },
  { id: 4, airline: 'GoAir', price: 3000, duration: '5h 15m', departure: '2025-03-18T08:00:00', arrival: '2025-03-18T13:15:00' },
  { id: 5, airline: 'Vistara', price: 7000, duration: '4h 30m', departure: '2025-03-19T07:30:00', arrival: '2025-03-19T12:00:00' },
  { id: 6, airline: 'AirAsia India', price: 2800, duration: '5h 10m', departure: '2025-03-20T11:00:00', arrival: '2025-03-20T16:10:00' },
];

export default FlightBooking;
