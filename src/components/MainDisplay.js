import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MainDisplay.css";
import Map from "./Map";
import Weather from "./Weather";

function MainDisplay() {
  const { state } = useLocation();
  const [location, setLocation] = useState(state?.location || null);
  const [searchQuery, setSearchQuery] = useState(state?.query || "");
  const [attractions, setAttractions] = useState([]);
  const API_KEY = "9f62ada4458337c8090427bcadd88a95";

  useEffect(() => {
    if (searchQuery && !location) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.coord) {
            setLocation({
              lat: data.coord.lat,
              lng: data.coord.lon,
            });
          }
        })
        .catch((error) => console.error("Error fetching geolocation:", error));
    }
  }, [searchQuery, location]);

  useEffect(() => {
    if (!location && !searchQuery) {
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
  }, [location, searchQuery]);

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
