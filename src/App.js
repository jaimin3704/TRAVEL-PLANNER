import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import FloatingButton from './components/FloatingButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TrendingPackages from './pages/TrendingPackages';
import WeatherAlerts from './pages/WeatherAlerts';

// Travel Features
import TravelGrid from './components/TravelGrid';
import TravelGridDetails from './components/TravelGridDetails';
import VirtualGroupTravel from './components/VideoCall';
import BudgetCalculator from './components/BudgetCalculator';
import MoodTracker from './components/MoodTracker';

// Flight Booking
import FlightBooking from './components/FlightBooking/FlightBooking';
import FlightResults from './components/FlightBooking/FlightResults';
import FlightDetails from './components/FlightBooking/FlightDetails';
import InsuranceDetails from './components/FlightBooking/InsuranceDetails';
import Payment from './components/FlightBooking/Payment';

// ✅ Customize Trip Feature
import CustomizeTrip from './pages/CustomizeTrip';
import TripSummary from './pages/TripSummary';
import { Link } from 'react-router-dom';

// Animated Routes for smooth transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Travel Features */}
        <Route path="/travelgrid" element={<TravelGrid />} />
        <Route path="/destination/:name" element={<TravelGridDetails />} />
        <Route path="/trending-packages" element={<TrendingPackages />} />
        <Route path="/virtual-travel" element={<VirtualGroupTravel />} />
        <Route path="/budget-calculator" element={<BudgetCalculator />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/weather-alerts" element={<WeatherAlerts />} />

        {/* Flight Booking & Insurance */}
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/flight-results" element={<FlightResults />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/insurance-details" element={<InsuranceDetails />} />

        {/* ✅ Payment Route */}
        <Route path="/payment" element={<Payment />} />

        {/* ✅ Customize Trip Feature */}
        <Route path="/customize-trip" element={<CustomizeTrip />} />
        <Route path="/trip-summary" element={<TripSummary />} />

        {/* ✅ 404 Fallback with "Go Home" Button */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
              <h2 className="text-3xl font-bold text-red-600">404 - Page Not Found</h2>
              <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
              <Link to="/" className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Go Back Home
              </Link>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <FloatingButton />
    </Router>
  );
};

export default App;
