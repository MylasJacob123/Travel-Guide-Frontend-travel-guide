import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function HomePage() {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExploreClick = () => {
    setShowOptions(true);
  };

  const handleSearch = () => {
    navigate("/display", { state: { query: searchQuery } });
  };

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        navigate("/display", { state: { location: { lat: latitude, lng: longitude } } });
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to fetch your location. Please enable location services.");
      }
    );
  };

  return (
    <div className="homepage-container">
      <div className="homepage-heading-section">
        <i className="fa fa-plane fa-3x"></i>
        <h1 className="homepage-heading">Welcome to Travel Guide</h1>
      </div>
      <h3 className="homepage-second-heading">Your perfect companion for weather-based adventures!</h3>
      <p className="homepage-main-message">
        Whether it's sunshine, rain, or snow, we help you discover the best
        attractions tailored to the current weather in your favorite cities.
        From cozy indoor escapes to thrilling outdoor experiences, Travel Guide
        ensures your travel plans are always in tune with the skies above.
      </p>
      <p className="homepage-secondary-message">
        Let the weather inspire your next destination! Where will your adventure
        take you today?
      </p>
      {!showOptions ? (
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore
        </button>
      ) : (
        <div className="explore-options">
          <input
            type="text"
            placeholder="Search for a location..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="location-btn" onClick={handleGetCurrentLocation}>
            Get Current Location
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
