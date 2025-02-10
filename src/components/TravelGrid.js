import React from 'react';
import './TravelGrid.css';
import { useNavigate } from 'react-router-dom';

const travelDestinations = [
  {
    region: 'North India',
    locations: [
      { name: 'Shimla', type: 'Hill Station', highlights: 'Beautiful landscapes, pleasant weather, trekking', img: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww" },
      { name: 'Manali', type: 'Adventure / Mountain', highlights: 'Paragliding, river rafting, trekking', img: "https://i.pinimg.com/474x/fd/5d/72/fd5d72dfd8712e4741b3ddfcaec0742b.jpg" },
      { name: 'Agra', type: 'Heritage / Culture', highlights: 'Taj Mahal, Agra Fort', img: "https://i.pinimg.com/474x/ba/46/90/ba46909ae656057d6829788913b707bb.jpg" },
      { name: 'Varanasi', type: 'Spiritual / Cultural', highlights: 'Ganga Aarti, Kashi Vishwanath Temple', img: "https://i.pinimg.com/736x/d9/21/ce/d921ce0dca361c69e9a7668130c2d033.jpg" },
      { name: 'Sikkim', type: 'Mountain Hill', highlights: 'Gangtok, Lachung, Zero Point', img: "https://i.pinimg.com/736x/ac/b3/b8/acb3b8f6fbe933724791a098751b20c0.jpg" },
      { name: 'Nainital', type: 'Lake', highlights: 'Ayarpata, Deopata, Handi-Bandi, Sher-Ka-Danda', img: "https://i.pinimg.com/736x/cc/6e/cf/cc6ecf4ed4af38bd519319dea03730ae.jpg" }
    ],
  },
  {
    region: 'South India',
    locations: [
      { name: 'Ooty', type: 'Hill Station', highlights: 'Nilgiri Hills, botanical gardens, tea plantations', img: "https://i.pinimg.com/474x/e9/2e/e5/e92ee533d0ff43098dd5f4f9d4fc466f.jpg" },
      { name: 'Mysore', type: 'Heritage / Culture', highlights: 'Mysore Palace, Chamundi Hill', img: "https://i.pinimg.com/474x/55/9e/00/559e007dd6d1899a3f08e6872b6ca826.jpg" },
      { name: 'Coorg', type: 'Nature / Coffee Plantation', highlights: 'Coffee estates, Abbey Falls', img: "https://i.pinimg.com/474x/5c/cf/c4/5ccfc4bf64f290edd3651e6d2ef23f7b.jpg" },
      { name: 'Kanyakumari', type: 'Coastal / Spiritual', highlights: 'Vivekananda Rock Memorial, Sunset', img: "https://i.pinimg.com/736x/7c/1b/51/7c1b513d7c63f3513a878170bd915733.jpg" }
    ],
  },
  {
    region: 'West India',
    locations: [
      { name: 'Goa', type: 'Beach / Leisure', highlights: 'Beaches, water sports, nightlife', img: "https://i.pinimg.com/474x/fe/c0/fb/fec0fb1c9a2a70f4812e3fe9ddc88d86.jpg" },
      { name: 'Jaipur', type: 'Heritage / Culture', highlights: 'Amer Fort, Hawa Mahal', img: "https://i.pinimg.com/474x/dd/94/49/dd9449814cc77e7d5398651679bf4707.jpg" }
    ],
  },
  {
    region: 'East India',
    locations: [
      { name: 'Kolkata', type: 'Heritage / Culture', highlights: 'Victoria Memorial, Howrah Bridge', img: "https://i.pinimg.com/474x/19/da/e7/19dae7ddb77be5deadc49287c19f352e.jpg" },
      { name: 'Darjeeling', type: 'Hill Station', highlights: 'Tea plantations, Tiger Hill', img: "https://i.pinimg.com/474x/4f/3d/a5/4f3da5b42f1b3480ccafc3c6e72f4b25.jpg" }
    ],
  }
];

const TravelGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = (location) => {
    navigate(`/destination/${location.name}`, { state: location });
  };

  return (
    <div className="travel-container">
      <div className="travel-content">
        <h1 className="title">Travel Destinations</h1>
        {travelDestinations.map((regionData, regionIndex) => (
          <div key={regionIndex}>
            <h2 className="region-title">{regionData.region}</h2>
            <div className="card-container">
              {regionData.locations.map((location, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(location)}>
                  <img className="card-image" src={location.img} alt={location.name} />
                  <div className="card-text">
                    <h3 className="card-title">{location.name}</h3>
                    <p className="card-description">{location.type} | <strong>{location.highlights}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGrid;
