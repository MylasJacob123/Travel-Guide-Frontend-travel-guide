import React from 'react'
import Image03 from "../assets/bg-image.jpg";
import "./Login.css";

function forgot() {
    return (
        <div className='Login'>
        <div className='LoginPage'>
            <div className='LoginPage-up'>
                <img src={Image03} className='LoginPage-image' alt="a place in Africa" />
            </div>
            <div className='LoginPage-down'>
            <p className="LoginPage-heard">Lost your way? Reset your path to adventure.</p>
        <input className='LoginPage-Email' type='text' placeholder='Email'/>
        <button className='LoginPage-button'>Reset Password</button>
        </div>
        </div>
    </div>
  )
}

export default forgot