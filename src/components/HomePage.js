import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function HomePage() {
  const navigate = useNavigate();

  const onToExplorePage = () => {
    navigate("/display")
  }
  return (
    <div className="homepage-container">
      <div class="homepage-heading-section">
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
      <button className="explore-btn" onClick={onToExplorePage}>Explore</button>
    </div>
  );
}
export default HomePage;
