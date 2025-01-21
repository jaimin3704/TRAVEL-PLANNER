import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [answers, setAnswers] = useState([]);
  const [suggestedDestinations, setSuggestedDestinations] = useState([]);

  const questions = [
    "Do you prefer indoor or outdoor activities?",
    "Do you enjoy beaches or mountains?",
    "What's your ideal weather? (Hot, Cold, or Moderate)",
    "Are you more interested in culture or nature?",
    "Do you want a relaxed or adventurous experience?",
    "Would you like to visit a historical or modern place?",
  ];

  const options = {
    0: ["Indoor", "Outdoor"],
    1: ["Beach", "Mountain"],
    2: ["Hot", "Cold", "Moderate"],
    3: ["Culture", "Nature", "Both"],
    4: ["Relaxed", "Adventurous", "Balanced"],
    5: ["Historical", "Modern"],
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const getDestinations = () => {
    if (answers.length !== questions.length || answers.includes(undefined)) {
      alert('Please answer all questions.');
      return;
    }

    let destinations = [];

    // New realistic combinations based on user answers:
    if (answers.includes('Outdoor') && answers.includes('Beach') && answers.includes('Moderate')) {
      destinations.push({
        name: 'Goa',
        highlights: 'Beaches, vibrant nightlife, water sports',
        region: 'West India',
        description: 'Goa is a perfect beach destination with a mix of culture and nature.'
      });
    }

    if (answers.includes('Outdoor') && answers.includes('Mountain') && answers.includes('Cold')) {
      destinations.push({
        name: 'Shimla',
        highlights: 'Snow, trekking, scenic views',
        region: 'North India',
        description: 'Shimla offers a pleasant retreat with snowy mountains and scenic landscapes.'
      });
    }

    if (answers.includes('Indoor') && answers.includes('Cold') && answers.includes('Culture')) {
      destinations.push({
        name: 'Jaipur',
        highlights: 'Historical forts, palaces, desert culture',
        region: 'West India',
        description: 'Jaipur provides a rich cultural experience with historical forts and royal palaces.'
      });
    }

    if (answers.includes('Nature') && answers.includes('Moderate') && answers.includes('Relaxed')) {
      destinations.push({
        name: 'Kerala',
        highlights: 'Backwaters, calm beaches, nature trails',
        region: 'South India',
        description: 'Kerala, known for its backwaters and tranquil beaches, is a paradise for nature lovers.'
      });
    }

    if (answers.includes('Adventurous') && answers.includes('Mountain') && answers.includes('Cold')) {
      destinations.push({
        name: 'Leh Ladakh',
        highlights: 'Adventure sports, mountain biking, Buddhist monasteries',
        region: 'North India',
        description: 'Leh Ladakh is ideal for adventure enthusiasts, offering mountain biking and trekking.'
      });
    }

    if (answers.includes('Historical') && answers.includes('Hot') && answers.includes('Relaxed')) {
      destinations.push({
        name: 'Rajasthan',
        highlights: 'Desert safaris, historical forts, royal palaces',
        region: 'North India',
        description: 'Rajasthan offers a historical journey with majestic forts and royal palaces, perfect for a relaxed experience.'
      });
    }

    if (answers.includes('Both') && answers.includes('Moderate') && answers.includes('Balanced')) {
      destinations.push({
        name: 'Darjeeling',
        highlights: 'Tea gardens, hills, toy train',
        region: 'East India',
        description: 'Darjeeling is known for its picturesque hills and tea gardens, offering a perfect balance of culture and nature.'
      });
    }

    if (answers.includes('Outdoor') && answers.includes('Beach') && answers.includes('Hot')) {
      destinations.push({
        name: 'Andaman Islands',
        highlights: 'Crystal clear waters, secluded beaches, water sports',
        region: 'Andaman & Nicobar Islands',
        description: 'The Andaman Islands offer pristine beaches, perfect for outdoor lovers seeking a tropical beach vacation.'
      });
    }

    // Default destinations if no specific match is found
    if (destinations.length === 0) {
      destinations = [
        { name: 'Manali', highlights: 'Adventure sports, snow-capped mountains', region: 'North India' },
        { name: 'Mysore', highlights: 'Palaces, culture, serene temples', region: 'South India' },
        { name: 'Rishikesh', highlights: 'Yoga, spirituality, adventure', region: 'North India' },
      ];
    }

    setSuggestedDestinations(destinations);
  };

  return (
    <div className="mood-tracker">
      <h2 className="title">
        Mood Tracker<span> 🌏</span>
      </h2>
      <p className="description">
        Answer a few questions and let us suggest your next travel destination!
      </p>
      <div className="form-container">
        <div className="form-column">
          {questions.slice(0, 3).map((question, index) => (
            <div className="question-block" key={index}>
              <p className="question">{question}</p>
              <select
                className="answer-dropdown"
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                {options[index].map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="form-column">
          {questions.slice(3).map((question, index) => (
            <div className="question-block" key={index + 3}>
              <p className="question">{question}</p>
              <select
                className="answer-dropdown"
                onChange={(e) => handleAnswerChange(index + 3, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                {options[index + 3].map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      <div className="centered-button">
        <button className="submit-btn" onClick={getDestinations}>
          Get Suggested Destinations
        </button>
      </div>
      {suggestedDestinations.length > 0 && (
        <div className="result">
          <h3>Suggested Destinations:</h3>
          <ul className="diverse-destinations">
            {suggestedDestinations.map((dest, index) => (
              <li key={index}>
                <strong>{dest.name}</strong> - {dest.highlights} ({dest.region})
                <p>{dest.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
