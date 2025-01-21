import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await axios.get('https://api.example.com/destinations'); // Replace with a real API
      setDestinations(response.data);
    };
    fetchDestinations();
  }, []);

  return (
    <div className="container my-4">
      <h2>Popular Destinations</h2>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>{dest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
