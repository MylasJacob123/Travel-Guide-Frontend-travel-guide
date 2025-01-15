import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="logo-container">
        <FaMapMarkerAlt size={30} color="#90e0ef" />
        <span className="logo-text">Travel Guide</span>
      </div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/display" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Start Your Journey
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/favorites" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
