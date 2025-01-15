import React from "react";
import Image02 from "../assets/bg-image.jpg";
import "./Login.css";

function Register() {
  return (
    <div className='Login'>
        <div className='LoginPage'>
            <div className='LoginPage-up'>
                <img src={Image02} className='LoginPage-image' alt="a place in Africa" />
            </div>
            <div className='LoginPage-down'>
              <p className="LoginPage-heard">Join the journey. Your travel guide awaits!</p>
            <input className='LoginPage-Email' type='text' placeholder='Name'/>
            <input className='LoginPage-Email' type='text' placeholder='Last Name'/>
        <input className='LoginPage-Email' type='text' placeholder='Email'/>
        <input className='LoginPage-Password' type="text" placeholder='Password'/>
        <button className='LoginPage-button'>Sign Up</button>
        </div>
        </div>
    </div>
  );
}

export default Register;
 