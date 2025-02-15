import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Function to get weather data using OpenWeatherMap API
const getWeather = async (city) => {
  const apiKey = 'eebff73bde6f7fb76afafe2ad2eb0fcf';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
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
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

// Function to get the best time to visit from an API or local database
const getBestTime = async (city) => {
  try {
    // Replace the URL with your actual endpoint that returns best time data for a city
    const response = await axios.get(`/api/best-time`, {
      params: { city }
    });
    // Assuming the response returns an object like { bestTime: "May to September" }
    return response.data.bestTime;
  } catch (error) {
    console.error("Error fetching best time data:", error);
    return "Data not available";
  }
};

const TravelGridDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const weatherData = await getWeather(destination.name);
      if (weatherData) {
        const bestTime = await getBestTime(destination.name);
        setWeather({ ...weatherData, bestTime });
      } else {
        setError("Failed to load weather data.");
      }
      setLoading(false);
    };

    fetchData();
  }, [destination.name]);

  if (!destination) return <div>Destination details not found.</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{destination.name} Details</h1>
      
      <div style={styles.infoContainer}>
        <p style={styles.infoText}><strong>Type:</strong> {destination.type}</p>
        <p style={styles.infoText}><strong>Highlights:</strong> {destination.highlights}</p>
      </div>

      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={styles.spinner} className="loading-spinner" />
          <p style={styles.loadingText}>Loading weather...</p>
        </div>
      ) : error ? (
        <p style={styles.errorText}>{error}</p>
      ) : weather ? (
        <div style={styles.weatherCard}>
          <h3 style={styles.weatherTitle}>Current Weather</h3>
          <img src={weather.icon} alt={weather.description} style={styles.weatherIcon} />
          <p style={styles.weatherText}><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p style={styles.weatherText}><strong>Description:</strong> {weather.description}</p>
          <p style={styles.weatherText}><strong>Humidity:</strong> {weather.humidity}%</p>
          <p style={styles.weatherText}><strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
          <p style={styles.weatherText}><strong>Best Time to Visit:</strong> {weather.bestTime}</p>
        </div>
      ) : (
        <p style={styles.errorText}>No weather data available.</p>
      )}

      <button
        onClick={() => navigate(-1)}
        style={styles.backButton}
      >
        Back to Destinations
      </button>

      {/* Spinner Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

// Inline styles object for improved styling
const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "80px auto 0",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  title: {
    marginBottom: "20px",
    fontSize: "2.5em",
    color: "#333"
  },
  infoContainer: {
    marginBottom: "20px"
  },
  infoText: {
    fontSize: "1.2em",
    color: "#555",
    margin: "5px 0"
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #007bff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    marginBottom: "10px"
  },
  loadingText: {
    fontSize: "1.2em",
    color: "#777"
  },
  errorText: {
    fontSize: "1.2em",
    color: "#f00"
  },
  weatherCard: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  weatherTitle: {
    fontSize: "2em",
    color: "#333",
    marginBottom: "10px"
  },
  weatherIcon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px"
  },
  weatherText: {
    fontSize: "1.2em",
    color: "#555",
    margin: "5px 0"
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1.2em",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default TravelGridDetails;
