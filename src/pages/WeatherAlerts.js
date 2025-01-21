import React, { useState, useEffect } from 'react';
import Weather from '../components/Weather'; // Import your weather API functions

const WeatherAlerts = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); // Set a default city
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await Weather.getWeatherAlerts(city);
        setWeatherData(data); // Store the fetched weather data
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeatherData();
  }, [city]); // Re-fetch when city changes

  return (
    <div>
      <h1>Weather Alerts for {city}</h1>

      {/* Display loading state */}
      {!weatherData && !error && <p>Loading...</p>}

      {/* Display error if any */}
      {error && <p>{error}</p>}

      {/* Display weather data if available */}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}

      {/* Input to change city */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city based on input
        placeholder="Enter city"
      />
    </div>
  );
};

export default WeatherAlerts;
