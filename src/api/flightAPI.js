import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const API_HOST = "sky-scanner3.p.rapidapi.com";

export const fetchFlights = async (from, to, departDate, returnDate) => {
  try {
    const options = {
      method: "GET",
      url: `https://${API_HOST}/flights/search-roundtrip`,
      params: {
        from,
        to,
        departDate,
        returnDate,
        adults: "1",
        currency: "INR",
        countryCode: "IN",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    };

    const response = await axios.request(options);
    return response.data?.data?.itineraries || [];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch flights. Please try again later.");
  }
};
