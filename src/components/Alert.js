// components/AlertList.js
import React, { useEffect, useState } from 'react';
import { fetchWeather } from './Weather';

const Alerts = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeather(city);
      setWeatherData(data);

      if (data) {
        // Analyze weather and generate alerts (AI-Powered logic)
        if (data.weather[0].main === 'Rain') {
          setAlertMessage('There is heavy rain expected in your travel destination!');
        } else if (data.weather[0].main === 'Thunderstorm') {
          setAlertMessage('Severe thunderstorms are expected in your destination. Please take necessary precautions.');
        } else {
          setAlertMessage('Weather looks good for your travel!');
        }
      }
    };

    getWeatherData();
  }, [city]);

  return (
    <div className="alert-container">
      {weatherData ? (
        <>
          <h2 className="alert-title">Weather Alerts for {city}</h2>
          <p className="alert-message">{alertMessage}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Alerts;
