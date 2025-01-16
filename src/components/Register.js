import React, { useState } from "react";
import Image02 from "../assets/bg-image.jpg";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration successful!");
    }
  };

  const linkToLogin = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Register">
      <div className="RegisterPage">
        <div className="RegisterPage-up">
          <img
            src={Image02}
            className="RegisterPage-image"
            alt="a place in Africa"
          />
        </div>
        <div className="RegisterPage-down">
          <h2 className="RegisterPage-heard">
            Join Us and Begin Your Journey!
          </h2>
          <form onSubmit={handleSubmit} className="RegisterPage-form">
            <input
              className="RegisterPage-Email"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            {errors.name && <p className="RegisterPage-error">{errors.name}</p>}
            <input
              className="RegisterPage-Email"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="RegisterPage-error">{errors.lastName}</p>
            )}
            <input
              className="RegisterPage-Email"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="RegisterPage-error">{errors.email}</p>
            )}
            <div className="RegisterPage-Password-Container">
              <input
                className="RegisterPage-Password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <span
                className="RegisterPage-Password-Toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            {errors.password && (
              <p className="RegisterPage-error">{errors.password}</p>
            )}
            <button className="RegisterPage-button" type="submit">
              Register
            </button>
          </form>
          <span>
            Already have an account?{" "}
            <span className="Link-Text" onClick={linkToLogin}>
              Login
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
