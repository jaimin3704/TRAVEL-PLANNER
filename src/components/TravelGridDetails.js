import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'; // Import axios for making API calls

// Function to get weather data from OpenWeatherMap
const getWeather = async (city) => {
  const apiKey = 'eebff73bde6f7fb76afafe2ad2eb0fcf'; // Replace with your OpenWeatherMap API key
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
  try {
    // Fetch weather data from OpenWeatherMap API
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric', // Use 'metric' for Celsius temperatures
        lang: 'en', // Language of weather description
      }
    });
    
    // Parse the response
    const weatherData = response.data;
    return {
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`, // Weather icon URL
      bestTime: "November to February", // Example, you can customize this based on season
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // In case of error, return null
  }
};

const TravelGridDetails = () => {
  const location = useLocation(); // Access state passed through navigate()
  const destination = location.state; // The state contains the full location object
  
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather data for the destination
    const fetchWeather = async () => {
      const weatherData = await getWeather(destination.name); // Get weather for the destination
      if (weatherData) {
        setWeather(weatherData);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [destination.name]);

  if (!destination) {
    return <div>Destination details not found.</div>;
  }

  return (
    <div style={{ padding: "40px 20px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginTop: "80px" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2.5em", color: "#333" }}>{destination.name} Details</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Type:</strong> {destination.type}</p>
        <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Highlights:</strong> {destination.highlights}</p>
      </div>

      {/* Weather Section */}
      {loading ? (
        <p style={{ fontSize: "1.2em", color: "#777" }}>Loading weather...</p>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ fontSize: "2em", color: "#333", marginBottom: "10px" }}>Current Weather</h3>
          <div>
            <img src={weather.icon} alt={weather.description} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
          </div>
          <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Description:</strong> {weather.description}</p>
          <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Best Time to Visit:</strong> {weather.bestTime}</p>
        </div>
      )}
    </div>
  );
};

export default TravelGridDetails;
