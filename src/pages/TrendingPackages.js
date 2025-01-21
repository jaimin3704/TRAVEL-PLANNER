// src/pages/TrendingPackages.js
import React from "react";

const packages = [
  {
    id: 1,
    name: "Shimla - Manali Delight",
    description: "3 Nights, 4 Days | Includes hotels, cabs, food, and guided tours.",
    cost: "₹25,000/Person",
    image: "https://images.unsplash.com/photo-1675515642372-cf31b44f802f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Goa Beach Escape",
    description: "5 Nights, 6 Days | Includes beachfront stay, cabs, and meals.",
    cost: "₹30,000/Person",
    image: "https://images.unsplash.com/photo-1685271552630-9bc169185566?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hJTIwYmVhY2hqfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Kerala Backwater Retreat",
    description: "4 Nights, 5 Days | Includes houseboat stay, meals, and local tours.",
    cost: "₹35,000/Person",
    image: "https://images.unsplash.com/photo-1572967398368-58a5b3776577?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtlcmVsYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Golden Triangle Tour",
    description: "6 Nights, 7 Days | Delhi, Agra, Jaipur | All-inclusive.",
    cost: "₹40,000/Person",
    image: "https://plus.unsplash.com/premium_photo-1697729441569-f706fdd1f71c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Ladakh Adventure",
    description: "7 Nights, 8 Days | Includes bike tours, stays, and meals.",
    cost: "₹50,000/Person",
    image: "https://i.pinimg.com/474x/f6/bb/9d/f6bb9de28e002bb2847cc5b76bdd8057.jpg",
  },
  {
    id: 6,
    name: "Andaman Paradise",
    description: "5 Nights, 6 Days | Includes beachfront stay and snorkeling.",
    cost: "₹45,000/Person",
    image: "https://i.pinimg.com/736x/f8/b8/23/f8b823c8a36ffc15b233e0078ea90566.jpg",
  },
  {
    id: 7,
    name: "Rajasthan Heritage Tour",
    description: "6 Nights, 7 Days | Explore Jaipur, Jodhpur, and Udaipur.",
    cost: "₹38,000/Person",
    image: "https://i.pinimg.com/474x/31/26/05/3126050a050e7f2cb656bb9f3bfd2030.jpg",
  },
  {
    id: 8,
    name: "Darjeeling & Gangtok Bliss",
    description: "5 Nights, 6 Days | Includes mountain tours and tea gardens.",
    cost: "₹28,000/Person",
    image: "https://i.pinimg.com/474x/3e/10/9d/3e109dc784af739a87ad7255557a54f7.jpg",
  },
  {
    id: 9,
    name: "Meghalaya Nature Trails",
    description: "5 Nights, 6 Days | Explore Cherrapunji and Living Root Bridges.",
    cost: "₹32,000/Person",
    image: "https://i.pinimg.com/474x/79/44/e2/7944e2cb83587e9c2f4bd23806cb9172.jpg",
  },
  {
    id: 10,
    name: "Sikkim Serenity",
    description: "4 Nights, 5 Days | Includes lakes, monasteries, and scenic views.",
    cost: "₹29,000/Person",
    image: "https://i.pinimg.com/474x/ca/9c/92/ca9c9277e831f3faa1a908b18d3c56ac.jpg",
  },
  // Add more packages up to 50 here...
];

const TrendingPackages = () => {
  return (
    <div
      className="relative min-h-screen p-8"
      style={{
        marginTop: "80px", 
        backgroundImage: `url('https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=KF5Bj2zltHbcVbVM0q7Qr3SZSccZoHUGqqTTAhv1GQU=')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Glass effect layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Trending Travel Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h2>
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                <p className="text-xl font-bold text-gray-800">{pkg.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPackages;
