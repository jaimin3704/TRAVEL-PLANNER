import React, { useState, useEffect } from "react";  // Import React hooks
import { useLocation, useNavigate } from "react-router-dom";  // Import navigation hooks
import axios from 'axios';  // Import axios for making API calls

// Function to get weather data using OpenWeatherMap API
const getWeather = async (city) => {
  const apiKey = 'eebff73bde6f7fb76afafe2ad2eb0fcf';  // Replace with your OpenWeatherMap API key
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';  // Base URL for API
  
  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
        lang: 'en'
      }
    });

    const weatherData = response.data;
    return {
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
      bestTime: "November to February"
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const TravelGridDetails = () => {
  const location = useLocation();  // Get the location state
  const navigate = useNavigate();  // Initialize navigation

  const destination = location.state;  // Extract destination details
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch weather when the component loads
  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather(destination.name);
      if (weatherData) setWeather(weatherData);
      setLoading(false);
    };

    fetchWeather();
  }, [destination.name]);

  if (!destination) return <div>Destination details not found.</div>;

  return (
    <div style={{ padding: "40px 20px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginTop: "80px" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2.5em", color: "#333" }}>{destination.name} Details</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Type:</strong> {destination.type}</p>
        <p style={{ fontSize: "1.2em", color: "#555" }}><strong>Highlights:</strong> {destination.highlights}</p>
      </div>

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

      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1.2em",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        Back to Destinations
      </button>
    </div>
  );
};

export default TravelGridDetails;  // Export component
