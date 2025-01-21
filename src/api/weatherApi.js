const API_KEY = "eebff73bde6f7fb76afafe2ad2eb0fcf"; // Replace with your actual OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherAlerts = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Export as default
const weatherApi = { getWeatherAlerts };
export default weatherApi;
