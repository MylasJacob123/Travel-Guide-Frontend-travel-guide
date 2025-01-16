import React, { useState } from "react";
import Image03 from "../assets/bg-image.jpg";
import "./Login.css";

function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Password reset link sent to your email.");
  };

//   console.log()

  return (
    <div className="Login">
      <div className="LoginPage">
        <div className="LoginPage-up">
          <img
            src={Image03}
            className="LoginPage-image"
            alt="a place in Africa"
          />
        </div>
        <div className="LoginPage-down">
          <p className="Forgot-heard">
            Lost your way? Reset your path to adventure.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="LoginPage-Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="ForgotPage-button" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
