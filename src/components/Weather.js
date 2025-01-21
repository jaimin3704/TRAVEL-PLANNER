// src/components/Weather.js
import React, { useEffect, useState } from "react";
import weatherApi from "../api/weatherApi"; // Adjust path based on your folder structure

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await weatherApi.getWeatherAlerts(city);
        setWeatherData(data);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again.");
      }
    };

    if (city) fetchWeatherData();
  }, [city]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in {city}</h2>
      <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
      <p><strong>Condition:</strong> {weatherData.weather[0].description}</p>
      <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
