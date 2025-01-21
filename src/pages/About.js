import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen pt-16 p-8"
      style={{
        marginTop: "80px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="max-w-6xl mx-auto p-8 bg-white/90 rounded-xl shadow-xl backdrop-blur-md"
        style={{
          boxShadow: "0 8px 60px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
        }}
      >
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-bold text-blue-600">Where 2 Next?</span>, your ultimate travel companion that helps you discover your next dream
          destination. Whether you're craving the mountains, beaches, or cultural
          explorations, we’ve got you covered with a list of curated, inspiring
          places across India.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <span className="font-bold text-blue-600">Where 2 Next?</span>, we believe travel is more than just visiting new places. It’s about building
          memories, discovering new cultures, and making meaningful connections
          with the world. We aim to make travel planning easy and accessible,
          allowing you to enjoy the journey as much as the destination.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 mb-8">
          <li>
            Curated destinations categorized by region, activities, and types,
            making it easier for you to choose the perfect getaway.
          </li>
          <li>
            In-depth details about each destination, providing you with
            everything you need to plan your trip, from highlights to travel tips.
          </li>
          <li>
            An intuitive, beautifully designed platform for seamless browsing
            and booking.
          </li>
          <li>
            Integration of booking options for accommodation, activities, and
            tours directly from the platform.
          </li>
          <li>
            Personalized recommendations based on your preferences and interests.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We’re passionate about travel, and we’ve created <span className="font-bold text-blue-600">Where 2 Next?</span> with love and dedication to
          travelers like you. Whether you’re a solo explorer, a couple seeking
          romance, or a family looking for fun, our platform offers
          recommendations tailored for everyone. With hidden gems, iconic spots,
          and exciting destinations, we help you plan the journey you’ve always
          dreamed of.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Have any questions or suggestions? We’d love to hear from you! You can
          reach out to us through our{" "}
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact Page
          </a>{" "}
          or follow us on social media for the latest updates and travel
          inspiration.
        </p>

        <div className="text-center mt-8">
          <a
            href="/trending-packages"
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-blue-500 transition duration-300"
          >
            Explore Our Destinations
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
