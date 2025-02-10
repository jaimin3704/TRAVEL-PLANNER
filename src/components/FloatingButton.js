import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingButton.css";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Discount modal state
  const [isHovering, setIsHovering] = useState(false); // Flight button hover state
  const navigate = useNavigate();

  // Open discount modal
  const handleRightButtonClick = () => {
    setIsOpen(true);
  };

  // Close discount modal
  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  // Handle hover for flight button
  const handleHoverStart = () => setIsHovering(true);
  const handleHoverEnd = () => setIsHovering(false);

  // Navigate to flight booking page
  const goToFlightBooking = () => {
    navigate("/flight-booking");
  };

  return (
    <>
      {/* Right Floating Button (💸) - Opens Discount Modal */}
      <div className="floating-button right" onClick={handleRightButtonClick}>
        💸
      </div>

      {/* Left Floating Button (✈️) - Navigates to Flight Booking */}
      <div
        className={`floating-button-left ${isHovering ? "highlight" : ""}`}
        onClick={goToFlightBooking}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        ✈️
      </div>

      {/* Tooltip when hovering over the flight button */}
      {isHovering && <div className="tooltip">Book a Flight</div>}

      {/* Offers Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <h2>Offers & Discounts</h2>
            <ul>
              <li>🌟 10% off on all flights</li>
              <li>🌟 Save ₹5000 on bookings over ₹50,000</li>
              <li>🌟 Last-minute deals available now!</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;
