import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Destination data grouped by region
const destinations = [
  {
    region: 'North India',
    locations: [
      { name: 'Shimla', lat: 31.1048, lon: 77.1734, type: 'Hill Station', highlights: 'Beautiful landscapes, pleasant weather, trekking', img: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww" },
      { name: 'Manali', lat: 32.2432, lon: 77.1892, type: 'Adventure / Mountain', highlights: 'Paragliding, river rafting, trekking', img: "https://i.pinimg.com/474x/fd/5d/72/fd5d72dfd8712e4741b3ddfcaec0742b.jpg" },
      { name: 'Agra', lat: 27.1767, lon: 78.0081, type: 'Heritage / Culture', highlights: 'Taj Mahal, Agra Fort', img: "https://i.pinimg.com/474x/ba/46/90/ba46909ae656057d6829788913b707bb.jpg" },
      { name: 'Varanasi', lat: 25.3176, lon: 82.9739, type: 'Spiritual / Cultural', highlights: 'Ganga Aarti, Kashi Vishwanath Temple', img: "https://i.pinimg.com/736x/d9/21/ce/d921ce0dca361c69e9a7668130c2d033.jpg" },
      { name: 'Sikkim', lat: 27.532, lon: 88.5122, type: 'Mountain Hill', highlights: 'Gangtok, Lachung, Zero Point', img: "https://i.pinimg.com/736x/ac/b3/b8/acb3b8f6fbe933724791a098751b20c0.jpg" },
      { name: 'Nainital', lat: 29.3919, lon: 79.4542, type: 'Lake', highlights: 'Ayarpata, Deopata, Handi-Bandi, Sher-Ka-Danda', img: "https://i.pinimg.com/736x/cc/6e/cf/cc6ecf4ed4af38bd519319dea03730ae.jpg" },
    ],
  },
  // Add similar objects for South, West, and East India
  {
    region: 'South India',
    locations: [
      { name: 'Ooty', lat: 11.4064, lon: 76.6932, type: 'Hill Station', highlights: 'Nilgiri Hills, botanical gardens, tea plantations', img: "https://i.pinimg.com/474x/e9/2e/e5/e92ee533d0ff43098dd5f4f9d4fc466f.jpg" },
      { name: 'Mysore', lat: 12.2958, lon: 76.6394, type: 'Heritage / Culture', highlights: 'Mysore Palace, Chamundi Hill', img: "https://i.pinimg.com/474x/55/9e/00/559e007dd6d1899a3f08e6872b6ca826.jpg" },
      { name: 'Coorg', lat: 12.4229, lon: 75.7391, type: 'Nature / Coffee Plantation', highlights: 'Coffee estates, Abbey Falls', img: "https://i.pinimg.com/474x/5c/cf/c4/5ccfc4bf64f290edd3651e6d2ef23f7b.jpg" },
      { name: 'Kanyakumari', lat: 8.0883, lon: 77.5385, type: 'Coastal / Spiritual', highlights: 'Vivekananda Rock Memorial, Sunset', img: "https://i.pinimg.com/736x/7c/1b/51/7c1b513d7c63f3513a878170bd915733.jpg" },
    ],
  },
];

const MapComponent = () => {
  const mapCenter = [23.5937, 78.9629]; // Centered on India
  const zoomLevel = 5; // Default zoom level to focus on India

  // Custom Leaflet marker icon
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={{ height: '100vh', width: '100%', position: 'sticky', top: 0 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {destinations.flatMap((region) => region.locations).map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lon]}
            icon={customIcon}
          >
            <Popup>
              <h3 className="font-bold">{location.name}</h3>
              <p><strong>Type:</strong> {location.type}</p>
              <p><strong>Highlights:</strong> {location.highlights}</p>
              <img
                src={location.img}
                alt={location.name}
                style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
