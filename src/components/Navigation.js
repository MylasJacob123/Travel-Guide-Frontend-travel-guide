import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-container">
      <div className="logo-container">
        <FaMapMarkerAlt size={30} color="#90e0ef" />
        <span className="logo-text">Travel Guide</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FiX size={30} color="whitesmoke" />
        ) : (
          <FiMenu size={30} color="whitesmoke" />
        )}
      </div>

      {isMenuOpen && (
        <ul className="nav-links">
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
              to="/profile"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
