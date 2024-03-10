import React, { useState } from "react";
import "../register/register.css";
import {useNavigate} from "react-router-dom";


function Register() {

    const navigate = useNavigate();
  const [user, Setuser] = useState({});

  const handleinput = (e) => {
    Setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/register",  {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data =>{
      console.log(data);
      navigate('/login')
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <div className="login">
      <div className="login-box">
        <form>
          <label>
            <h1>REGISTER</h1>
          </label>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="username"
              onChange={handleinput}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleinput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={handleinput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Re-enter your Password"
              name="re-password"
              onChange={handleinput}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              onChange={handleinput}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleinput}
            />
          </div>
          <div>
            <button className="register-button" onClick={handleSubmit}>
              REGISTER
            </button>
          </div>
          <span>or</span>
          <div>
            <button className="register-button"  onClick={() => navigate('/login')}>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
