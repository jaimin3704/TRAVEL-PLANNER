import React, { useState, useEffect } from 'react';

const indianCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Indore", "Surat", "Bhopal", "Chandigarh", "Goa"
];

const FlightSearch = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  useEffect(() => {
    setError('');
  }, [origin, destination, departureDate, returnDate, passengers]);

  // Function to handle city suggestions
  const handleCitySuggestions = (input, setSuggestions) => {
    if (input) {
      const filteredCities = indianCities.filter(city =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!indianCities.includes(origin)) {
      setError(`⚠️ Invalid Origin: '${origin}'. Please enter a valid Indian city.`);
      return;
    }
    if (!indianCities.includes(destination)) {
      setError(`⚠️ Invalid Destination: '${destination}'. Please enter a valid Indian city.`);
      return;
    }
    if (departureDate && returnDate && new Date(departureDate) > new Date(returnDate)) {
      setError("⚠️ Return date must be after the departure date.");
      return;
    }
    if (passengers < 1) {
      setError("⚠️ At least one passenger must be selected.");
      return;
    }

    onSearch({ origin, destination, departureDate, returnDate, passengers });
  };

  return (
    <div className="flex w-full max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
      {/* Left - Flight Search Form */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Search Flights</h2>
        {error && <p className="text-red-600 font-semibold text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Origin */}
          <div>
            <label htmlFor="origin" className="block text-lg font-medium text-gray-700 mb-2">From</label>
            <input
              type="text"
              id="origin"
              value={origin}
              onChange={(e) => {
                setOrigin(e.target.value);
                handleCitySuggestions(e.target.value, setOriginSuggestions);
              }}
              placeholder="Enter Indian city"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {originSuggestions.length > 0 && (
              <ul className="bg-white border border-gray-300 rounded-lg mt-1 shadow-md">
                {originSuggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setOrigin(city);
                      setOriginSuggestions([]);
                    }}
                    className="p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Destination */}
          <div>
            <label htmlFor="destination" className="block text-lg font-medium text-gray-700 mb-2">To</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                handleCitySuggestions(e.target.value, setDestinationSuggestions);
              }}
              placeholder="Enter Indian city"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {destinationSuggestions.length > 0 && (
              <ul className="bg-white border border-gray-300 rounded-lg mt-1 shadow-md">
                {destinationSuggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setDestination(city);
                      setDestinationSuggestions([]);
                    }}
                    className="p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Departure Date */}
          <div>
            <label htmlFor="departureDate" className="block text-lg font-medium text-gray-700 mb-2">Departure Date</label>
            <input
              type="date"
              id="departureDate"
              min={new Date().toISOString().split("T")[0]} // Restrict past dates
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Return Date */}
          <div>
            <label htmlFor="returnDate" className="block text-lg font-medium text-gray-700 mb-2">Return Date</label>
            <input
              type="date"
              id="returnDate"
              min={departureDate || new Date().toISOString().split("T")[0]} // Restrict return date
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Passengers */}
          <div>
            <label htmlFor="passengers" className="block text-lg font-medium text-gray-700 mb-2">Passengers</label>
            <input
              type="number"
              id="passengers"
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value))}
              min="1"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Button */}
          <div>
            <button 
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>

      {/* Right - Indian Travel News Panel */}
      <div className="w-1/2 ml-6 bg-gray-100 p-6 rounded-lg shadow-lg overflow-y-auto h-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Latest Travel News in India</h3>
        <ul className="space-y-4">
          {[
            { id: 1, title: "New Domestic Flight Routes in India", description: "Explore new routes from metro cities like Delhi, Mumbai, and Bengaluru." },
            { id: 2, title: "India to Open More International Routes", description: "Direct flights to Europe and Southeast Asia are now available." },
            { id: 3, title: "Government’s New Aviation Policy 2025", description: "Major changes to increase air connectivity across smaller towns in India." },
            { id: 4, title: "India's Biggest Airline Launches New Budget Travel Deals", description: "Get budget tickets for as low as ₹999." },
          ].map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow-sm hover:bg-blue-50">
              <h4 className="font-semibold text-lg text-blue-600">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSearch;
