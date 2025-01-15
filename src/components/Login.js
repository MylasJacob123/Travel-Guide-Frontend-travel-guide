import React ,{useState}from 'react'
import Image01 from "../assets/bg-image.jpg";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();


const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <div className='Login'>
        <div className='LoginPage'>
            <div className='LoginPage-up'>
                <img src={Image01} className='LoginPage-image' alt="a place in Africa" />
            </div>
            <div className='LoginPage-down'>
            <p className="LoginPage-heard">Start your adventure. Log in and explore the world!</p>
        <input className='LoginPage-Email' type='text' placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
        <input className='LoginPage-Password' type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button className='LoginPage-button'>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login