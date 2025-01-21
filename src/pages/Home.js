import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent'; // Import the map component
import Weather from '../components/Weather'; // Import the Weather API module

const Home = () => {
  const navigate = useNavigate();

  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const city = 'London'; // Default city, change to dynamic if needed

  // Handle click to explore destinations
  const handleExplore = () => {
    navigate('/travelgrid'); // Redirect to the destinations page
  };

  // Fetch weather data when the component mounts
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await Weather.getWeatherAlerts(city); // Fetch weather data
        setWeatherData(data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };
    
    fetchWeatherData();
  }, [city]); // Only re-fetch when the city changes

  return (
    <div className="relative min-h-screen">
      {/* Background Section */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white px-8">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Plan Your Dream Vacation
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Discover and organize amazing trips with ease.
          </p>
          <p className="text-3xl sm:text-4xl italic font-semibold mb-12">
            "Your Adventure Awaits!"
          </p>

          {/* Button to Explore Destinations */}
          <button
            onClick={handleExplore}
            className="px-6 py-3 bg-blue-600 text-lg font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Exploring
          </button>

          {/* Scroll Down Prompt */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <p className="text-lg text-white">Scroll Down to Explore Destinations</p>
            <div className="animate-bounce text-white text-4xl">↓</div>
          </div>
        </div>
      </div>

      {/* Weather Section */}
      <div className="pt-16 pb-16 text-white">
        {error && <p className="text-red-500">{error}</p>} {/* Show error if there's an issue fetching the weather */}
        {weatherData ? (
          <div>
            <h2 className="text-2xl font-bold">Current Weather in {city}</h2>
            <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
            <p className="text-lg">Weather: {weatherData.weather[0].description}</p>
            <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>

      {/* Map Section */}
      <div className="pt-16 pb-16">
        <MapComponent /> {/* The interactive map component */}
      </div>
    </div>
  );
};

export default Home;
