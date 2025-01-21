import React, { useState } from 'react';

const TravelPlanForm = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your trip to ${destination} is planned for ${date}`);
  };

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Destination:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Plan Trip</button>
    </form>
  );
};

export default TravelPlanForm;
