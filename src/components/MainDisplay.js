import React, { useState, useEffect } from "react";
import "./MainDisplay.css";
import Map from "./Map";
import Weather from "./Weather";

function MainDisplay() {
  const [location, setLocation] = useState(null);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  }, [location]);

  return (
    <div className="main-display-container">
      <div className="weather-container">
        <Weather
          setLocation={setLocation}
          initialLocation={location}
          setAttractions={setAttractions}
        />
      </div>
      <div className="map-container">
        <Map location={location} attractions={attractions} />
      </div>
    </div>
  );
}

export default MainDisplay;
