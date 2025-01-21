// src/pages/DestinationDetails.js
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import weatherApi from "../api/weatherApi"; // Adjust path based on your project structure

const DestinationDetails = () => {
  const { name } = useParams(); // Fetch destination name from route params
  const location = useLocation(); // Fetch state passed from TravelGrid
  const [weather, setWeather] = useState(null);

  const destination = location.state?.destination;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await weatherApi.getWeatherAlerts(name);
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (destination) fetchWeather();
  }, [name, destination]);

  if (!destination) {
    return <h2>Destination details are missing. Please navigate from the TravelGrid page.</h2>;
  }

  return (
    <div className="destination-details">
      <h1>{destination.name}</h1>
      <img src={destination.img} alt={destination.name} style={{ width: "100%", maxHeight: "400px" }} />
      <p><strong>Type:</strong> {destination.type}</p>
      <p><strong>Highlights:</strong> {destination.highlights}</p>
      {weather ? (
        <div>
          <h3>Weather Information:</h3>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default DestinationDetails;
