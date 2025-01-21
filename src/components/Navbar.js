import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Handle scroll events to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // If scrolling down and more than 100px down, hide navbar
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 0) {
        // If scrolling up or back at the top, show navbar
        setShowNavbar(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${showNavbar ? "visible" : "hidden"}`} // Toggle visibility class
    >
      <div className="container flex items-center justify-between px-6 py-3">
        {/* Brand Section */}
        <div className="navbar-brand flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="Travel Planner Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-black">Where 2 Next?</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-nav flex space-x-4">
          <li>
            <Link
              to="/"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/trending-packages"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/travelgrid"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Travel Grid
            </Link>
          </li>
          <li>
            <Link
              to="/virtual-travel"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Virtual Group Travel
            </Link>
          </li>
          <li>
            <Link
              to="/budget-calculator"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Budget Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/mood-tracker"
              className="nav-link text-black hover:text-blue-600 transition font-medium"
            >
              Mood Tracker
            </Link>
          </li>
        </ul>

        {/* Search Section */}
        <div className="relative">
          <button
            onClick={() => {}}
            className="text-black hover:text-blue-600 transition"
          >
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
