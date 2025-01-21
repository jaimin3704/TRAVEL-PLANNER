import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TravelGrid from "./components/TravelGrid";
import TravelGridDetails from "./components/TravelGridDetails"; // Add the details page
import TrendingPackages from "./pages/TrendingPackages"; // Import TrendingPackages
import VirtualGroupTravel from "./components/VideoCall"; // Import VirtualGroupTravel
import BudgetCalculator from "./components/BudgetCalculator";
import MoodTracker from "./components/MoodTracker";
import WeatherAlerts from "./pages/WeatherAlerts";

// App Component
const App = () => {
  return (
    <Router>
      {/* Navbar is persistent across all pages */}
      <Navbar />

      {/* Application routes */}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Travel Pages */}
        <Route path="/travelgrid" element={<TravelGrid />} />
        <Route path="/destination/:name" element={<TravelGridDetails />} /> {/* Dynamic details page */}

        {/* Trending and Virtual Group Travel */}
        <Route path="/trending-packages" element={<TrendingPackages />} /> {/* Trending Packages */}
        <Route path="/virtual-travel" element={<VirtualGroupTravel />} /> {/* Virtual Group Travel */}

        {/* Utilities */}
        <Route path="/budget-calculator" element={<BudgetCalculator />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/weather-alerts" element={<WeatherAlerts />} />

        {/* Catch-all Route for 404 */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
